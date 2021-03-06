let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",0],["width",360],["height",360],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"123"}]}],"opacity":1,"type":"dom","mask":"url(#karas-defs-0-0)"}],"opacity":1,"type":"dom","defs":[{"tagName":"mask","props":[],"children":[{"type":"item","tagName":"path","props":[["d","M50,50L100,100L50,100L50,50"],["fill","rgba(255,255,255,1)"],["stroke","rgba(0,0,0,1)"],["stroke-width",0],["transform","matrix(1,0,0,1,50,0)"]]}],"uuid":"karas-defs-0-0"}]}')
      .end();
  }
};
