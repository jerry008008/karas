let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAANTklEQVR4Xu3cP6j1AxzH8c/jYbAY1VMGf7LrKdnMRllsJIuN/MmTUixSKCWFwWpgNhiMQmJnUQwGf1YppaN76g73Wc99D6+z3en37fX99u507rn3yrwIECBAIClwJTmVoQgQIEBg5wN9ddvr217Z9vy2d/kQIECAwOUJHAN9bdsn2+7cdv+2lwT68pbiyQQIEDgIHAP94raHtj217fdtNwTagRAgQOByBY6Bvmvbr2ej/C3Ql7sUTydAgMD5d9DnNQTabRAgQCAgcNG3OAQ6sBgjECBAQKDdAAECBKICAh1djLEIECAg0G6AAAECUQGBji7GWAQIEDgG+vq2O844vtj20bbPzn7+etvhF4deBAgQIHBCgWOgDxE+/KHKRa97tv18wpk8igABAgTO/SUhDAIECBCICfhvdrGFGIcAAQJHAYF2CwQIEIgKCHR0McYiQICAQLsBAgQIRAUEOroYYxEgQECg3QABAgSiAgIdXYyxCBAgINBugAABAlEBgY4uxlgECBAQaDdAgACBqIBARxdjLAIECAi0GyBAgEBUQKCjizEWAQIEBNoNECBAICog0NHFGIsAAQIC7QYIECAQFRDo6GKMRYAAAYF2AwQIEIgKCHR0McYiQICAQLsBAgQIRAUEOroYYxEgQECg3QABAgSiAgIdXYyxCBAgINBugAABAlEBgY4uxlgECBAQaDdAgACBqIBARxdjLAIECAi0GyBAgEBUQKCjizEWAQIEBNoNECBAICog0NHFGIsAAQIC7QYIECAQFRDo6GKMRYAAAYF2AwQIEIgKCHR0McYiQICAQLsBAgQIRAUEOroYYxEgQECg3QABAgSiAgIdXYyxCBAgINBugAABAlEBgY4uxlgECBAQaDdAgACBqIBARxdjLAIECAi0GyBAgEBUQKCjizEWAQIEBNoNECBAICog0NHFGIsAAQIC7QYIECAQFRDo6GKMRYAAAYF2AwQIEIgKCHR0McYiQICAQLsBAgQIRAUEOroYYxEgQECg3QABAgSiAgIdXYyxCBAgINBugAABAlEBgY4uxlgECBAQaDdAgACBqIBARxdjLAIECAi0GyBAgEBUQKCjizEWAQIEBNoNECBAICog0NHFGIsAAQIC7QYIECAQFRDo6GKMRYAAAYF2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')
      .end();
  }
};
