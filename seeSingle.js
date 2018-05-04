var listContainerItem = document.getElementsByTagName("LI");
var modal = document.getElementById('myModal');



listContainerItem.onclick = function() {
  notesArray = Array.from(document.getElementsByTagName("LI"));

  notesArray.forEach(function(arrayItem) {
    arrayItem.onclick = function() {
      
      var noteBody = document.getElementById("noteBody");
    }
  });
  var modal = document.getElementById('modalText');
  modal.style.display = "block";
};












var closeButton = document.getElementsByClassName("close")[0];

closeButton.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};