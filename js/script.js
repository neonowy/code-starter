$(document).ready(function() {

  function autoSelect(elem) {
    var selection, range;
    if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(elem);
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection) { // IE
      selection = document.selection.createRange().text;
      range = document.body.createTextRange();
      range.moveToElementText(elem);
      range.select();
    }
  }

  $('code').click(function() {
    autoSelect(this);
  });
});