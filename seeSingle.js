var listContainerItem = document.getElementsByTagName("LI");
var modal = document.getElementById('myModal');

var closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

(function showNoteBodyInModal() {
  alert("hay");
  itemArray = Array.from(document.getElementsByTagName("LI"));
  itemArray.forEach(function(listContainerItem) {
    listContainerItem.onclick = function() {
      var modalText = document.getElementById('modalText');
      var listContainerItemIndex = getIndex(listContainerItem, itemArray);
      modalText.innerHTML = notebook.allNotes[listContainerItemIndex].body;
      displayModal();
    };
  });
})();

function getIndex(item, collection) {
  return collection.indexOf(item);
}


function displayModal() {
modal.style.display = "block";
}
