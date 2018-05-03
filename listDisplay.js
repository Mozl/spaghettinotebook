function makeList(notebook) {
  var list = document.getElementById('theList');
  list.innerHTML = "";
  var i;
  for (i = 0; i < notebook.allNotes.length; i++) {
    var listItem = document.createElement("li");

    listItem.innerHTML = notebook.allNotes[i].title;
    list.appendChild(listItem);
  }
  var all = document.getElementsByTagName('LI');
  var items = Array.from(all);
  
  
  items.forEach(function(item) {
    item.onclick = function(){
    var modal = document.getElementById('modalText');
    var modallll = document.getElementById('myModal');
    modal.innerHTML = modalText.innerHTML;
    modallll.style.display = "block";
    console.log(modalText);
    };
  });




}
