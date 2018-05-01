function Notebook() {
  this.allNotes = [];
}

Notebook.prototype.addNote = function (string) {
  this.allNotes.push(string);
};
