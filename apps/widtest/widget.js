(() => {
  function draw() {
    g.reset();
    g.drawString("X", this.x, this.y);
  }
  WIDGETS["mywidget"]={
    area:"tl",
    width: 28,
    draw:draw
  };
})()
