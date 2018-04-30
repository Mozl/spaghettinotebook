function Note(body) {
  this.body = body;
  this.title = this.extractTitle(body);
}

Note.prototype.extractTitle = function(body) {
  return body.slice(0, 20);
};
