const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: '',
      show: true,
      windowSize: '1680x1000'
    }
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/base.js",
    accountPage: "./pages/account.js",
    productPage: "./pages/product.js",
    cartPage: "./pages/cart.js",
  },
  name: 'drozdovsky-js'
}
