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
