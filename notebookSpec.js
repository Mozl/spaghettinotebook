(function testRunner() {
  (function addNoteTest() {
    var book = new Notebook();
    book.addNote("Shit Birds");
    if(book.allNotes[0] !== "Shit Birds") {
      throw new Error("Note not found");
    }
  })();
})();
