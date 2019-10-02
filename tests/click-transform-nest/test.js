var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .end()
      // .assert.value('input', 'data:image/png;base64,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')
      // .moveToElement('canvas', 150, 50)
      // .mouseButtonClick(0)
      // .assert.value('input', '0')
      // .moveToElement('canvas', 110, 10)
      // .mouseButtonClick(0)
      // .assert.value('input', '0')
      // .moveToElement('canvas', 90, 50)
      // .mouseButtonClick(0)
      // .assert.value('input', '1')
      // .end();
  }
};
