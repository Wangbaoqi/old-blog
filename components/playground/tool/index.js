function moveCursorWithinInput(input, position) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(position, position);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd("character", position);
    range.moveStart("character", position);
    range.select();
  }
}

export default moveCursorWithinInput;
