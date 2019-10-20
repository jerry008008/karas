var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .moveToElement('canvas', 1, 1)
      .mouseButtonClick(0)
      .assert.value('input', '0')
      .moveToElement('canvas', 1, 1)
      .mouseButtonClick(0)
      .assert.value('input', '1')
      .end();
  }
};
