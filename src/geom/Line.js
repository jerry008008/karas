import Geom from './Geom';
import mode from '../util/mode';
import painter from '../util/painter';
import util from '../util/util';

let { isNil } = util;

function reBuild(target, origin, base, isMulti) {
  if(isMulti) {
    return target.map(item => origin + item * base);
  }
  else {
    return origin + target * base;
  }
}

function reBuildC(target, originX, originY, width, height, isMulti) {
  if(isMulti) {
    if(target) {
      return target.map(item => reBuildC(item, originX, originY, width, height));
    }
  }
  else {
    if(target && target.length === 2) {
      return [
        originX + target[0] * width,
        originY + target[1] * height,
      ];
    }
  }
  return [];
}

function curveNum(controlA, controlB) {
  let num = 0;
  if(controlA.length === 2) {
    num++;
  }
  if(controlB.length === 2) {
    num += 2;
  }
  return num;
}

class Line extends Geom {
  constructor(tagName, props) {
    super(tagName, props);
    // x1,y1和x2,y2表明线段的首尾坐标，control表明控制点坐标
    if(this.isMulti) {
      this.__x1 = [0];
      this.__y1 = [0];
      this.__x2 = [1];
      this.__y2 = [1];
      this.__controlA = [[]];
      this.__controlB = [[]];
      if(Array.isArray(props.x1)) {
        this.__x1 = props.x1.map(i => parseFloat(i) || 0);
      }
      else if(!isNil(props.x1)) {
        this.__x1 = [parseFloat(props.x1) || 0];
      }
      if(Array.isArray(props.y1)) {
        this.__y1 = props.y1.map(i => parseFloat(i) || 0);
      }
      else if(!isNil(props.y1)) {
        this.__y1 = [parseFloat(props.y1) || 0];
      }
      if(Array.isArray(props.x2)) {
        this.__x2 = props.x2.map(i => parseFloat(i) || 0);
      }
      else if(!isNil(props.x2)) {
        this.__x2 = [parseFloat(props.x2) || 0];
      }
      if(Array.isArray(props.y2)) {
        this.__y2 = props.y2.map(i => parseFloat(i) || 0);
      }
      else if(!isNil(props.y2)) {
        this.__y2 = [parseFloat(props.y2) || 0];
      }
      if(Array.isArray(props.controlA)) {
        this.__controlA = props.controlA.map(item => {
          if(Array.isArray(item)) {
            return item;
          }
          return [];
        });
      }
      if(Array.isArray(props.controlB)) {
        this.__controlB = props.controlB.map(item => {
          if(Array.isArray(item)) {
            return item;
          }
          return [];
        });
      }
    }
    else {
      this.__x1 = this.__y1 = 0;
      this.__x2 = this.__y2 = 1;
      this.__controlA = [];
      this.__controlB = [];
      if(!isNil(props.x1)) {
        this.__x1 = parseFloat(props.x1) || 0;
      }
      if(!isNil(props.y1)) {
        this.__y1 = parseFloat(props.y1) || 0;
      }
      if(!isNil(props.x2)) {
        this.__x2 = parseFloat(props.x2) || 0;
      }
      if(!isNil(props.y2)) {
        this.__y2 = parseFloat(props.y2) || 0;
      }
      if(Array.isArray(props.controlA)) {
        this.__controlA = props.controlA;
      }
      if(Array.isArray(props.controlB)) {
        this.__controlB = props.controlB;
      }
    }
  }

  render(renderMode, ctx, defs) {
    let {
      isDestroyed,
      cache,
      display,
      visibility,
      originX,
      originY,
      stroke,
      strokeWidth,
      strokeDasharrayStr,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
    } = super.render(renderMode, ctx, defs);
    if(isDestroyed || display === 'none' || visibility === 'hidden' || cache) {
      return;
    }
    let { width, height, x1, y1, x2, y2, controlA, controlB, __cacheProps, isMulti } = this;
    let rebuild;
    if(isNil(__cacheProps.x1)) {
      rebuild = true;
      __cacheProps.x1 = reBuild(x1, originX, width, isMulti);
    }
    if(isNil(__cacheProps.x2)) {
      rebuild = true;
      __cacheProps.x2 = reBuild(x2, originX, width, isMulti);
    }
    if(isNil(__cacheProps.y1)) {
      rebuild = true;
      __cacheProps.y1 = reBuild(y1, originY, height, isMulti);
    }
    if(isNil(__cacheProps.y2)) {
      rebuild = true;
      __cacheProps.y2 = reBuild(y2, originY, height, isMulti);
    }
    if(isNil(__cacheProps.controlA)) {
      rebuild = true;
      __cacheProps.controlA = reBuildC(controlA, originX, originY, width, height, isMulti);
    }
    if(isNil(__cacheProps.controlB)) {
      rebuild = true;
      __cacheProps.controlB = reBuildC(controlB, originX, originY, width, height, isMulti);
    }
    if(rebuild && renderMode === mode.SVG) {
      let d = '';
      if(isMulti) {
        __cacheProps.x1.forEach((xa, i) => {
          let xb = __cacheProps.x2[i];
          let ya = __cacheProps.y1[i];
          let yb = __cacheProps.y2[i];
          let ca = __cacheProps.controlA[i];
          let cb = __cacheProps.controlB[i];
          let curve = curveNum(ca, cb);
          d += painter.svgLine(xa, ya, xb, yb, ca, cb, curve);
        });
      }
      else {
        let curve = curveNum(__cacheProps.controlA, __cacheProps.controlB);
        d = painter.svgLine(__cacheProps.x1, __cacheProps.y1, __cacheProps.x2, __cacheProps.y2,
          __cacheProps.controlA, __cacheProps.controlB, curve);
      }
      __cacheProps.d = d;
    }
    if(renderMode === mode.CANVAS) {
      if(strokeWidth > 0) {
        ctx.beginPath();
        if(isMulti) {
          __cacheProps.x1.forEach((xa, i) => {
            let xb = __cacheProps.x2[i];
            let ya = __cacheProps.y1[i];
            let yb = __cacheProps.y2[i];
            let ca = __cacheProps.controlA[i];
            let cb = __cacheProps.controlB[i];
            let curve = curveNum(ca, cb);
            painter.canvasLine(ctx, xa, ya, xb, yb, ca, cb, curve);
          });
        }
        else {
          let curve = curveNum(__cacheProps.controlA, __cacheProps.controlB);
          painter.canvasLine(ctx, __cacheProps.x1, __cacheProps.y1, __cacheProps.x2, __cacheProps.y2,
            __cacheProps.controlA, __cacheProps.controlB, curve);
        }
        ctx.stroke();
        ctx.closePath();
      }
    }
    else if(renderMode === mode.SVG) {
      let props = [
        ['d', __cacheProps.d],
        ['fill', 'none'],
        ['stroke', stroke],
        ['stroke-width', strokeWidth]
      ];
      this.__propsStrokeStyle(props, strokeDasharrayStr, strokeLinecap, strokeLinejoin, strokeMiterlimit);
      this.addGeom('path', props);
    }
  }

  get x1() {
    return this.getProps('x1');
  }
  get y1() {
    return this.getProps('y1');
  }
  get x2() {
    return this.getProps('x2');
  }
  get y2() {
    return this.getProps('y2');
  }
  get controlA() {
    return this.getProps('controlA');
  }
  get controlB() {
    return this.getProps('controlB');
  }
}

export default Line;
