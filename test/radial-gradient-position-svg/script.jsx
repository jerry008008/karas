let o = karas.render(
  <svg width="360" height="360">
    <div style={{marginBottom:1,width:50,height:50,background:'radial-gradient(closest-side at 10px 20px, #F00, #0F0, #00F)'}} />
    <div style={{marginBottom:1,width:50,height:50,background:'radial-gradient(closest-corner at 10px 20px, #F00, #0F0, #00F)'}} />
    <div style={{marginBottom:1,width:50,height:50,background:'radial-gradient(farthest-side at 10px 20px, #F00, #0F0, #00F)'}} />
    <div style={{marginBottom:1,width:50,height:50,background:'radial-gradient(closest-side at -10px -20px, #F00, #0F0, #00F)'}} />
    <div style={{marginBottom:1,width:50,height:50,background:'radial-gradient(closest-corner at -10px -20px, #F00, #0F0, #00F)'}} />
    <div style={{width:50,height:50,background:'radial-gradient(farthest-side at -10px -20px, #F00, #0F0, #00F)'}} />
  </svg>,
  '#test'
);
var input = document.querySelector('#base64');
input.value = JSON.stringify(o.virtualDom);
