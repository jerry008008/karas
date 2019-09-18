import Geom from './Geom';
import mode from '../mode';

class Grid extends Geom {
  constructor(props) {
    super('$grid', props);
    // x,y被分为几格
    this.__nx = 0;
    if(this.props.nx) {
      this.__nx = parseFloat(this.props.nx);
      if(isNaN(this.nx)) {
        this.__nx = 0;
      }
    }
    this.__ny = 0;
    if(this.props.ny) {
      this.__ny = parseFloat(this.props.ny);
      if(isNaN(this.ny)) {
        this.__ny = 0;
      }
    }
  }

  render(renderMode) {
    super.render(renderMode);
    let { x, y, width, height, style, ctx, nx, ny } = this;
    if(width <= 0 || height <= 0) {
      return;
    }
    if(nx < 3 && ny < 3) {
      return;
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
    let endX = originX + width;
    let endY = originY + height;
    let lx = [];
    let ly = [];
    if(nx >= 3) {
      let per = width / (nx - 1);
      for(let i = 0; i < nx; i++) {
        ly.push(originX + i * per);
      }
    }
    if(ny >= 3) {
      let per = height / (ny - 1);
      for(let i = 0; i < ny; i++) {
        lx.push(originY + i * per);
      }
    }
    if(renderMode === mode.CANVAS) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.setLineDash(strokeDasharray);
      ctx.beginPath();
      lx.forEach(item => {
        ctx.moveTo(originX, item);
        ctx.lineTo(endX, item);
      });
      ly.forEach(item => {
        ctx.moveTo(item, originY);
        ctx.lineTo(item, endY);
      });
      if(strokeWidth && stroke !== 'transparent') {
        ctx.stroke();
      }
      ctx.closePath();
    }
    else if(renderMode === mode.SVG) {
      lx.forEach(item => {
        mode.appendHtml(`<line x1="${originX}" y1="${item}" x2="${endX}" y2="${item}" stroke-width="${strokeWidth}" stroke="${stroke}" stroke-dasharray="${strokeDasharray}"/>`);
      });
      ly.forEach(item => {
        mode.appendHtml(`<line x1="${item}" y1="${originY}" x2="${item}" y2="${endY}" stroke-width="${strokeWidth}" stroke="${stroke}" stroke-dasharray="${strokeDasharray}"/>`);
      });
    }
  }

  get nx() {
    return this.__nx;
  }
  get ny() {
    return this.__ny;
  }
  get dash() {
    return this.__dash;
  }
}

export default Grid;