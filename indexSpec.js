(function runTests() {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };

// ***********************************************



  (function newNote() {
    var note = new Note('this is an example note that has more than 20 characters becasuse it should');
    assert.isTrue(typeof note.title === "string");
    assert.isTrue(typeof note.body === "string");
  })();

  (function extractTitleTest() {
    var note = new Note("this is an example note that has more than 20 characters becasuse it should");
    assert.isTrue(note.title.length === 20);
  })();
})();