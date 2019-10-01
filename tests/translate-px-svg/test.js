var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",0],["width",100],["height",18.3984375],["fill","#00F"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",14.484375],["fill","#000"],["font-size","16px"]],"content":"1"}]}],"transform":[["matrix","1,0,0,1,10,0"]],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",18.3984375],["width",100],["height",18.3984375],["fill","#F00"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",32.8828125],["fill","#000"],["font-size","16px"]],"content":"2"}]}],"transform":[["matrix","1,0,0,1,0,10"]],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",36.796875],["width",100],["height",18.3984375],["fill","#0F0"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",51.28125],["fill","#000"],["font-size","16px"]],"content":"3"}]}],"transform":[["matrix","1,0,0,1,10,10"]],"type":"dom"}],"transform":[],"type":"dom","defs":[]}')
      .end();
  }
};