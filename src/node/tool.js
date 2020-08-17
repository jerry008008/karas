import util from '../util/util';

function init(target, root, host) {
  let ref = target.props.ref;
  if(util.isString(ref) && ref) {
    host.ref[ref] = target;
  }
  else if(util.isFunction(ref)) {
    ref(target);
  }
  target.__root = root;
  target.__host = host;
}

function genCanvasPolygon(ctx, list, method = 'fill') {
  ctx.beginPath();
  ctx.moveTo(list[0][0], list[0][1]);
  for(let i = 1, len = list.length; i < len; i++) {
    let item = list[i];
    if(item.length === 2) {
      ctx.lineTo(item[0], item[1]);
    }
    else if(item.length === 4) {
      ctx.quadraticCurveTo(item[0], item[1], item[2], item[3]);
    }
    else if(item.length === 6) {
      ctx.bezierCurveTo(item[0], item[1], item[2], item[3], item[4], item[5]);
    }
  }
  ctx[method]();
  ctx.closePath();
}

function genSvgPolygon(list) {
  let s = 'M' + list[0][0] + ',' + list[0][1];
  for(let i = 1, len = list.length; i < len; i++) {
    let item = list[i];
    if(item.length === 2) {
      s += 'L' + item[0] + ',' + item[1];
    }
    else if(item.length === 4) {
      s += 'Q' + item[0] + ',' + item[1] + ',' + item[2] + ',' + item[3];
    }
    else if(item.length === 6) {
      s += 'C' + item[0] + ',' + item[1] + ',' + item[2] + ',' + item[3] + ',' + item[4] + ',' + item[5];
    }
  }
  return s;
}

export default {
  init,
  genCanvasPolygon,
  genSvgPolygon,
};
