var noteNodes = document.getElementsByTagName('LI');
var note = Array.from(noteNodes);
console.log(note);

note.forEach(function(thing){
  thing.onclick = function(){
      console.log(thing.innerHTML);
      
  };
});
