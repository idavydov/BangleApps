WIDGETS["bluetooth"]={area:"tr",width:15,draw:function() {
  if (WIDGETS["bluetooth"].width==0)
    return;
  g.reset();
  if (NRF.getSecurityStatus().connected)
    g.setColor((g.getBPP()>8) ? "#07f" : (g.theme.dark ? "#0ff" : "#00f"));
  else
    g.setColor(g.theme.dark ? "#666" : "#999");
  g.drawImage(atob("CxQBBgDgFgJgR4jZMawfAcA4D4NYybEYIwTAsBwDAA=="),2+this.x,2+this.y);
},changed:function(noDraw) {
  var settings = require('Storage').readJSON("widbt.json", true) || {};

  if (settings.hideDisconnected) {
    WIDGETS["bluetooth"].width = NRF.getSecurityStatus().connected?15:0;
    // width has changed
    if (!noDraw) Bangle.drawWidgets();
  } else {
    if (!noDraw) WIDGETS["bluetooth"].draw();
  }
}};

// set width to 0 if needed
WIDGETS["bluetooth"].changed(true);
NRF.on('connect',WIDGETS["bluetooth"].changed);
NRF.on('disconnect',WIDGETS["bluetooth"].changed);
