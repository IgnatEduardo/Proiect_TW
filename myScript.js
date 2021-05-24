
function sortList(type, order) {
  var list, i, switching, b, shouldSwitch,c;
  list = document.getElementById("id01");
  switching = true;

  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    //c = list.getElementsByTagName("H4");
    if(type == 0 || type == 1) {
      c = list.getElementsByTagName("H4"); //if it sorts by name
      if(order == 1) {
        for (i = 0; i < (b.length - 1); i++) {
          shouldSwitch = false;
          if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      else {
        for (i = 0; i < (b.length - 1); i++) {
          shouldSwitch = false;
          if (c[i].innerHTML.toLowerCase() < c[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    else {
      c = list.getElementsByTagName("P"); // if it sorts by price
      if(order == 1) {
        for (i = 0; i < (b.length - 1); i++) {
          shouldSwitch = false;
          if (parseFloat(c[i]) > parseFloat(c[i + 1])) {
            shouldSwitch = true;
            break;
          }
        }
      }
      else {
        for (i = 0; i < (b.length - 1); i++) {
          shouldSwitch = false;
          if (parseFloat(c[i]) < parseFloat(c[i + 1])) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
      

    if(order == 1) {
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (c[i].innerHTML.toLowerCase() > c[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    else {
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (c[i].innerHTML.toLowerCase() < c[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      
      switching = true;
    }
  }
}

function changeImage() {
  var image = document.getElementById("mylogo");
  if (image.src.match("orange")) {
    image.src = "images/logo1-black.png";
  } 
  else {
    image.src = "images/logo1-orange.png";
  }
}