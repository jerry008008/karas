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
