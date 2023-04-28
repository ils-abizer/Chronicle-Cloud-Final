var sidebar = document.getElementsByClassName("sidebar-menu")[0];
var dropdown = document.getElementsByClassName("drop-down")[0];
function showSidebar() {
  
  sidebar.classList.add("active");
  console.log("LOG")
  hideDropdown()
}

function hideSidebar() {
  sidebar.classList.remove("active");
}


function showDropdown() {
  
  dropdown.classList.add("active");
}

function hideDropdown() {
  dropdown.classList.remove("active");
}

function toggleDropdown() {
  if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
  } else {
      dropdown.classList.add("active");
      hideSidebar()

  }
}


function hideAllElements() {
  hideDropdown()
  hideSidebar()
}


function directTo(link) {
  window.location.href = link;
}
