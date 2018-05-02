(function runTests() {
  
  (function newNote() {
    var note = new Note('this is an example note that has more than 20 characters becasuse it should');
    expect(typeof note.title).toEqual('string');
    expect(typeof note.body).toEqual("string");
  })();

  (function extractTitleTest() {
    var note = new Note("this is an example note that has more than 20 characters becasuse it should");
    expect(note.title.length).toEqual(20);
  })();
})();