import Geom from './Geom';
import mode from '../mode';

class Polygon extends Geom {
  constructor(props) {
    super('$polygon', props);
    // 所有点的列表
    this.__points = [];
    if(Array.isArray(this.props.points)) {
      this.__points = this.props.points;
    }
  }

  render(renderMode) {
    super.render(renderMode);
    let { x, y, width, height, style, ctx, points } = this;
    if(points.length < 3) {
      return;
    }
    for(let i = 0, len = points.length; i < len; i++) {
      if(!Array.isArray(points[i]) || points[i].length < 2) {
        return;
      }
    }
    let {
      display,
      borderTopWidth,
      borderLeftWidth,
      marginTop,
      marginLeft,
      paddingTop,
      paddingLeft,
      stroke,
      strokeWidth,
      strokeDasharray,
    } = style;
    if(display === 'none') {
      return;
    }
    let originX = x + borderLeftWidth.value + marginLeft.value + paddingLeft.value;
    let originY = y + borderTopWidth.value + marginTop.value + paddingTop.value;
    points.forEach(item => {
      item[0] = originX + item[0] * width;
      item[1] = originY + item[1] * height;
    });
    if(renderMode === mode.CANVAS) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.setLineDash(strokeDasharray);
      ctx.beginPath();
      ctx.moveTo(points[0][0], originY + points[0][1]);
      for(let i = 1, len = points.length; i < len; i++) {
        let point = points[i];
        ctx.lineTo(point[0], point[1]);
      }
      ctx.fill();
      if(strokeWidth && stroke !== 'transparent') {
        ctx.stroke();
      }
      ctx.closePath();
    }
    else if(renderMode === mode.SVG) {
      let points = '';
      for(let i = 0, len = points.length; i < len; i++) {
        let point = points[i];
        points += `${point[0]},${point[1]} `;
      }
      mode.appendHtml(`<polyline fill="none" points="${points}" stroke-width="${strokeWidth}" stroke="${stroke}" stroke-dasharray="${strokeDasharray}"/>`);
    }
  }

  get points() {
    return this.__points;
  }
}

export default Polygon;