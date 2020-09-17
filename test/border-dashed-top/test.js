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
