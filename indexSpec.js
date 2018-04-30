(function runTests() {

  (function newNote() {
    var note = new Note('this is an example note that has more than 20 characters becasuse it should');
    if (typeof note.title !== 'string') {
      throw new Error("note should contain a title");
    }
    if (typeof note.body !== 'string') {
      throw new Error("note should contain a body");
    }
  })();

  (function extractTitleTest() {
    var note = new Note("this is an example note that has more than 20 characters becasuse it should");
    if (note.title.length !== 20)  {
      throw new Error("note title should equal 20 characters");
    }
  })();
})();
