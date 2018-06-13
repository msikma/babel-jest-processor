A minimal setup that transforms test files using the latest Babel v7 beta.

The `uuid` package isn't needed, it's only used to test whether the `import` syntax is properly transformed.

This setup is necessary since the `babel-jest` package requires `babel-core`, which is the old package name and is lagging behind several versions.
