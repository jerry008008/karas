var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",0],["width",50],["height",50],["fill","url(#karas-defs-0-0)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",51],["width",50],["height",50],["fill","url(#karas-defs-0-1)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",102],["width",50],["height",50],["fill","url(#karas-defs-0-2)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",153],["width",50],["height",50],["fill","url(#karas-defs-0-3)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",204],["width",50],["height",50],["fill","url(#karas-defs-0-4)"]]}],"children":[],"transform":[],"type":"dom"}],"transform":[],"type":"dom","defs":[{"tagName":"radialGradient","props":[["cx",25],["cy",25],["r",35.35533905932738]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-0"},{"tagName":"radialGradient","props":[["cx",10],["cy",61],["r",56.568542494923804]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-1"},{"tagName":"radialGradient","props":[["cx",10],["cy",132],["r",50]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-2"},{"tagName":"radialGradient","props":[["cx",30],["cy",183],["r",42.42640687119285]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-3"},{"tagName":"radialGradient","props":[["cx",30],["cy",214],["r",50]],"stop":[["#F00",0],["#00F",1]],"uuid":"karas-defs-0-4"}]}')
      .end();
  }
};