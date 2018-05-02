function makeList(notebook) {
  var list = document.getElementById('theList');
  var i;
  for (i = 0; i < notebook.allNotes.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = notebook.allNotes[i].title;
    list.appendChild(listItem);
  }
}
