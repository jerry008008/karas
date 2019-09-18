var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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AgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCkg0KWmLQIECIQCAh1imiJAgEApINClpi0CBAiEAgIdYpoiQIBAKSDQpaYtAgQIhAICHWKaIkCAQCnwHyFPvpmrCXY3AAAAAElFTkSuQmCC')
      .end();
  }
};