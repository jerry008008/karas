let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
