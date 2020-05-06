var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
