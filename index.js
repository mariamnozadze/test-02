function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("openBtn").style.visibility = "hidden";
}

/*  width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("openBtn").style.visibility = "visible";
}

/*
function to display images when radio button is clicked
*/
function checkValue(fieldvalue) {
  switch (fieldvalue) {
    case 1:
      document.getElementById("image1").style.display = "inline";
      document.getElementById("image2").style.display = "none";
      document.getElementById("image3").style.display = "none";
      break;
    case 2:
      document.getElementById("image1").style.display = "none";
      document.getElementById("image2").style.display = "inline";
      document.getElementById("image3").style.display = "none";
      break;
    case 3:
      document.getElementById("image1").style.display = "none";
      document.getElementById("image2").style.display = "none";
      document.getElementById("image3").style.display = "inline";
      break;
  }
}
