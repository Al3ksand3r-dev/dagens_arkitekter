function showVal(value) {
  console.log("value", value, document.getElementById("imageChnage"));
  document.getElementById("imageChnage").src = "assets/h" + value + ".jpg";
}
document.getElementById("imageChnage").src =
  "assets/h" + document.getElementById("volume").value + ".jpg";
