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
