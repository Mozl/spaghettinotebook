(function testRunner() {
  (function addNoteTest() {
    var book = new Notebook();
    book.addNote("test string");
    expect(book.allNotes[0]).toEqual("test string");
  })();
})();
