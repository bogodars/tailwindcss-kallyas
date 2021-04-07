var gridItems = document.querySelectorAll('.item');

function showAll() {
  gridItems.forEach(function (element) {
    element.classList.add('show');
  });
}

function showCategory(category) {
  gridItems.forEach(function (element) {
    if (element.classList.contains(category)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}
showAll();
