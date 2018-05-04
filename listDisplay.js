function makeList(notebook) {
  appendNotesTo(resetListContainer());
  showNoteBodyInModal();
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

function showNoteBodyInModal() {
  itemArray = Array.from(document.getElementsByTagName("LI"));
  itemArray.forEach(function(listContainerItem) {
    listContainerItem.onclick = function() {
      var modalText = document.getElementById('modalText');
      var listContainerItemIndex = itemArray.indexOf(listContainerItem);
      modalText.innerHTML = notebook.allNotes[listContainerItemIndex].body;
      modal.style.display = "block";
    };
  });
}
