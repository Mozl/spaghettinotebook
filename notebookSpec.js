(function testRunner() {
  (function addNoteTest() {
    var book = new Notebook();
    book.addNote("test string");
    if(book.allNotes[0] !== "test string") {
      throw new Error("Note not found");
    }
  })();
})();
