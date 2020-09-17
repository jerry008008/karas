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
