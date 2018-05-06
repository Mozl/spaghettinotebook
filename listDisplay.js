function makeList(notebook) {
  appendNotesTo(resetListContainer());
}

function resetListContainer() {
  var listContainer = document.getElementById('theList');
  listContainer.innerHTML = "";
  return listContainer;
}

function appendNotesTo(listContainer){
  for (var i = 0; i < notebook.allNotes.length; i++) {
    var currentNote = notebook.allNotes[i];
    var listContainerItem = document.createElement("li");
    listContainer.appendChild(listContainerItem);
    listContainerItem.innerHTML = currentNote.title;
  }
}
