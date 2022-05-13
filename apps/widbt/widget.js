WIDGETS["bluetooth"]={area:"tr",draw:function() {
  if (WIDGETS["bluetooth"].width==0)
    return;
  g.reset();
  if (NRF.getSecurityStatus().connected)
    g.setColor((g.getBPP()>8) ? "#07f" : (g.theme.dark ? "#0ff" : "#00f"));
  else
    g.setColor(g.theme.dark ? "#666" : "#999");
  g.drawImage(atob("CxQBBgDgFgJgR4jZMawfAcA4D4NYybEYIwTAsBwDAA=="),2+this.x,2+this.y);
},changed:function() {
  WIDGETS["bluetooth"].width = WIDGETS["bluetooth"].show()?15:0;
  WIDGETS["bluetooth"].draw();
},show:function() {
  if (NRF.getSecurityStatus().connected)
    return true;
  var settings = require('Storage').readJSON("widbt.json", true) || {};
  if (settings.hideDisconnected)
    return false;
  return true;
}};
WIDGETS["bluetooth"].width = WIDGETS["bluetooth"].show()?15:0;
NRF.on('connect',WIDGETS["bluetooth"].changed);
NRF.on('disconnect',WIDGETS["bluetooth"].changed);
