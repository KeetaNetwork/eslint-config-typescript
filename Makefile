ESLINT_TEST_OPTIONS = --parser-options '{"project":["tsconfig.json"]}'

all:
	@echo 'Nothing to do'

node_modules/.done: package.json package-lock.json
	rm -rf node_modules
	npm install
	touch node_modules/.done

node_modules: node_modules/.done
	@:

test: node_modules
	npm run eslint package.json index.js
	npm run eslint -- $(ESLINT_TEST_OPTIONS) tests/good
	@retval='0' && for file in tests/bad/*.ts; do \
		npm run eslint -- $(ESLINT_TEST_OPTIONS) "$$file" || continue; \
		echo "File $$file should have failed, but did not -- this is a test failure"; \
		retval='1'; \
	done; \
	exit "$$retval"
	@retval='0' && for file in tests/bad/*.fix.ts; do \
		rm -rf "tests/fix/" && \
		mkdir -p "tests/fix/" && \
		cp "$$file" "tests/fix/" && \
		npm run eslint -- --fix $(ESLINT_TEST_OPTIONS) 'tests/fix' || :; \
		npm run eslint -- $(ESLINT_TEST_OPTIONS) 'tests/fix' && continue; \
		echo "File $$file should have been fixed, but still failed -- this is a test failure"; \
		retval='1'; \
	done; \
	exit "$$retval"
	rm -rf tests/fix
	cd plugins/eslint-plugin-return-parens && npm run test
	cd plugins/eslint-plugin-prefer-bigint-literal && npm run test

clean:
	rm -rf node_modules plugins/eslint-plugin-return-parens/node_modules
	rm -rf tests/fix

distclean: clean
	@:

.PHONY: all test clean distclean
