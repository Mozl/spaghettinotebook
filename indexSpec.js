describe("Note", function() {
  var note;
  beforeEach(function(){
    note = new Note('this is an example note that has more than 20 characters becasuse it should');
  });

  describe("newNote", function() {

    it("note title is a string", function(){
      expect(typeof note.title).toEqual('string');
    });

    it("note body is a string", function(){
      expect(typeof note.body).toEqual("string");
    });
  });

  describe("extractTitle", function() {

    it("note title is shortened to 20 characters", function(){
      expect(note.title.length).toEqual(20);
    });
  });
});
