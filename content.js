document.addEventListener('dblclick', function() {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (selectedText.endsWith(' ')) {
    const newText = selectedText.trimEnd();  // Remove trailing space
    const range = selection.getRangeAt(0);

    // Modify the selection range to exclude the trailing space
    const newRange = document.createRange();
    newRange.setStart(range.startContainer, range.startOffset);
    newRange.setEnd(range.endContainer, range.endOffset - 1);

    selection.removeAllRanges();
    selection.addRange(newRange);
  }
});
