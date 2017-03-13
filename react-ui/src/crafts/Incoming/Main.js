import Earth from './Earth'

function sketch(p) {

  var earth;

  p.setup = function () {
    var canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("sketch");

    p.smooth();
    p.imageMode(p.CENTER);

    earth = new Earth(p);
  };

  p.draw = function () {
    p.background(255);
    earth.draw()
  };

}




export default sketch