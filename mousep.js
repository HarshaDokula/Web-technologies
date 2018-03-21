function getLoc(event) {
  document.getElementById("t1").value = event.clientX;
  document.getElementById("t2").value = event.clientY;
  document.getElementById("t3").value = event.screenX;
  document.getElementById("t4").value = event.screenY;
}
