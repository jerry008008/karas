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
