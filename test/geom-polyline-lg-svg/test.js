let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M20,10L80,25L50,40"],["fill","rgba(0,0,0,0)"],["stroke","rgba(0,0,0,1)"],["stroke-width",1]]}],"opacity":1,"type":"geom"},{"bb":[],"children":[{"type":"item","tagName":"path","props":[["d","M20,60L80,90L50,90"],["fill","rgba(0,0,0,0)"],["stroke","url(#karas-defs-0-0)"],["stroke-width",1]]}],"opacity":1,"type":"geom"}],"opacity":1,"type":"dom","defs":[{"tagName":"linearGradient","props":[["x1",50],["y1",49.99999999999999],["x2",50],["y2",100]],"children":[{"tagName":"stop","props":[["stop-color","rgba(255,0,0,1)"],["offset","0%"]]},{"tagName":"stop","props":[["stop-color","rgba(0,0,255,1)"],["offset","100%"]]}],"uuid":"karas-defs-0-0"}]}')
      .end();
  }
};
