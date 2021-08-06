function showMap() {
  document.getElementById("mainIndex").style.visibility = "hidden";
  document.getElementById("mainMap").style.visibility = "visible";

  let header = document.getElementsByTagName('header')[0];
  header.classList.add('header-opaque')
}

function showIndex() {
  document.getElementById("mainIndex").style.visibility = "visible";
  document.getElementById("mainMap").style.visibility = "hidden";

  let header = document.getElementsByTagName('header')[0];
  header.classList.remove('header-opaque')
}