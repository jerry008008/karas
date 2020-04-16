import Text from '../node/Text';const SPF = 1000 / 60;let canvas = {  cache: null,  mask: null,};function cacheCanvas(key, width, height) {  let o;  if(!canvas[key]) {    o = canvas[key] = document.createElement('canvas');    o.style.position = 'absolute';    o.style.left = '9999px';    o.style.top = '-9999px';    document.body.append(o);  }  o = canvas[key];  o.setAttribute('width', width);  o.setAttribute('height', height);  o.style.width = width + 'px';  o.style.height = height + 'px';  return {    canvas: o,    ctx: o.getContext('2d'),  };}let inject = {  measureText(cb) {    let { list, data } = Text.MEASURE_TEXT;    let html = '';    let keys = [];    let chars = [];    Object.keys(data).forEach(i => {      let { key, style, s } = data[i];      if(s) {        let inline = `position:absolute;font-family:${style.fontFamily};font-size:${style.fontSize}px`;        for(let j = 0, len = s.length; j < len; j++) {          keys.push(key);          let char = s.charAt(j);          chars.push(char);          html += `<span style="${inline}">${char.replace(/</, '&lt;').replace(' ', '&nbsp;')}</span>`;        }      }    });    if(!html) {      cb();      return;    }    let div = document.createElement('div');    div.style.position = 'absolute';    div.style.left = '99999px';    div.style.top = '-99999px';    div.style.visibility = 'hidden';    document.body.appendChild(div);    div.innerHTML = html;    let cns = div.childNodes;    let { CHAR_WIDTH_CACHE, MEASURE_TEXT } = Text;    for(let i = 0, len = cns.length; i < len; i++) {      let node = cns[i];      let key = keys[i];      let char = chars[i];      // clientWidth只返回ceil整数，精度必须用getComputedStyle      let css = window.getComputedStyle(node, null);      CHAR_WIDTH_CACHE[key][char] = parseFloat(css.width);    }    list.forEach(text => text.__measureCb());    cb();    MEASURE_TEXT.list = [];    MEASURE_TEXT.data = {};    document.body.removeChild(div);  },  measureImg(url, cb) {    let img = new Image();    img.onload = function() {      cb({        success: true,        width: img.width,        height: img.height,        source: img,      });    };    img.onerror = function() {      cb({        success: false,      });    };    if(url.substr( 0, 5 ) !== 'data:') {      let host = /^(?:\w+:)?\/\/([^/:]+)/.exec(url);      if(host) {        if(location.hostname !== host[1]) {          img.crossOrigin = 'anonymous';        }      }    }    img.src = url;  },  warn(s) {    console.warn(s);  },  requestAnimationFrame(cb) {    let res;    if(typeof requestAnimationFrame !== 'undefined') {      inject.requestAnimationFrame = requestAnimationFrame.bind(window);      res = requestAnimationFrame(cb);    }    else {      res = setTimeout(cb, SPF);      inject.requestAnimationFrame = function(cb) {        return setTimeout(cb, SPF);      };    }    return res;  },  cancelAnimationFrame(id) {    let res;    if(typeof cancelAnimationFrame !== 'undefined') {      inject.cancelAnimationFrame = cancelAnimationFrame.bind(window);      res = cancelAnimationFrame(id);    }    else {      res = clearTimeout(id);      inject.cancelAnimationFrame = function(id) {        return clearTimeout(id);      };    }    return res;  },  now() {    if(typeof performance !== 'undefined') {      inject.now = performance.now.bind(performance);      return performance.now();    }    inject.now = Date.now.bind(Date);    return Date.now();  },  getCacheCanvas(width, height) {    return cacheCanvas('cache', width, height);  },  getMaskCanvas(width, height) {    return cacheCanvas('mask', width, height);  },};export default inject;