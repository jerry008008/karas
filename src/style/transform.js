import unit from '../style/unit';
import math from '../math/index';
import util from '../util/util';

const { PX, PERCENT } = unit;
const { matrix, geom } = math;
const { identity, calPoint, multiply } = matrix;
const { d2r, pointInPolygon } = geom;

function calSingle(t, k, v) {
  if(k === 'translateX') {
    t[4] = v;
  }
  else if(k === 'translateY') {
    t[5] = v;
  }
  else if(k === 'scaleX') {
    t[0] = v;
  }
  else if(k === 'scaleY') {
    t[3] = v;
  }
  else if(k === 'skewX') {
    v = d2r(v);
    t[2] = Math.tan(v);
  }
  else if(k === 'skewY') {
    v = d2r(v);
    t[1] = Math.tan(v);
  }
  else if(k === 'rotateZ') {
    v = d2r(v);
    let sin = Math.sin(v);
    let cos = Math.cos(v);
    t[0] = t[3] = cos;
    t[1] = sin;
    t[2] = -sin;
  }
  else if(k === 'matrix') {
    t[0] = v[0];
    t[1] = v[1];
    t[2] = v[2];
    t[3] = v[3];
    t[4] = v[4];
    t[5] = v[5];
  }
}

function calMatrix(transform, ow, oh) {
  let list = normalize(transform, ow, oh);
  let m = identity();
  list.forEach(item => {
    let [k, v] = item;
    let t = identity();
    calSingle(t, k, v);
    m = multiply(m, t);
  });
  return m;
}

function calMatrixByOrigin(m, transformOrigin) {
  let [ox, oy] = transformOrigin;
  if(ox === 0 && oy === 0) {
    return m;
  }
  let t = identity();
  t[4] = ox;
  t[5] = oy;
  let res = multiply(t, m);
  let t2 = identity();
  t2[4] = -ox;
  t2[5] = -oy;
  res = multiply(res, t2);
  return res;
}

function calMatrixWithOrigin(transform, transformOrigin, ow, oh) {
  let m = calMatrix(transform, ow, oh);
  return calMatrixByOrigin(m, transformOrigin);
}

// 判断点是否在一个矩形内，比如事件发生是否在节点上
function pointInQuadrilateral(x, y, x1, y1, x2, y2, x4, y4, x3, y3, matrix) {
  if(matrix && !util.equalArr(matrix, [1, 0, 0, 1, 0, 0])) {
    [x1, y1] = calPoint([x1, y1], matrix);
    [x2, y2] = calPoint([x2, y2], matrix);
    [x3, y3] = calPoint([x3, y3], matrix);
    [x4, y4] = calPoint([x4, y4], matrix);
    return pointInPolygon(x, y, [
      [x1, y1],
      [x2, y2],
      [x4, y4],
      [x3, y3]
    ]);
  }
  else {
    return x >= x1 && y >= y1 && x <= x4 && y <= y4;
  }
}

function normalizeSingle(k, v, ow, oh) {
  if(k === 'translateX') {
    if(v.unit === PERCENT) {
      return v.value * ow * 0.01;
    }
  }
  else if(k === 'translateY') {
    if(v.unit === PERCENT) {
      return v.value * oh * 0.01;
    }
  }
  else if(k === 'matrix') {
    return v;
  }
  return v.value;
}

function normalize(transform, ow, oh) {
  let res = [];
  transform.forEach(item => {
    let [k, v] = item;
    res.push([k, normalizeSingle(k, v, ow, oh)]);
  });
  return res;
}

function calOrigin(transformOrigin, w, h) {
  let tfo = [];
  transformOrigin.forEach((item, i) => {
    if(item.unit === PX) {
      tfo.push(item.value);
    }
    else if(item.unit === PERCENT) {
      tfo.push(item.value * (i ? h : w) * 0.01);
    }
  });
  return tfo;
}

export default {
  calMatrix,
  calOrigin,
  calMatrixByOrigin,
  calMatrixWithOrigin,
  pointInQuadrilateral,
};
