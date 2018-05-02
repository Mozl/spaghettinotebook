var addButton = document.getElementById("addbutton");
addButton.onclick = function () {
  var noteBody = document.getElementById("notebody").value;
  notebook.addNote(new Note(noteBody));
  makeList(notebook);
};