// # variable is called 'Card' with 3 attributes
var Card = function(id, description, completed){
  // 'this' belongs to the 'Card' so all of it is seen but here is only for 'id'
  this.id = id;
// description of the... well, 'description'
  this.description = description;
  // breaking down completed of this belonging to Card.
  this.completed = completed;
}

Card.prototype = {
  // example of what to use for Card and then save it.
  save: function(){
    // ajax helps us to Post the data via json on the web (url local host)
    $.ajax({
      type: 'POST',
      data: {card: {description: this.description, completed: this.completed}},
      dataType: 'json',
      url: "http://localhost:3000/cards"
    // when the previous code is completed, let me know and do the following:
    }).done(function(response){
      console.log("model saved")
      trilloModel.fetchCards();
      // and when the response does not work, log that too
    }).fail(function(){
      console.log("failed to save")
    })
  },
  // when you get cards, the high cards change to other users and this helps keep track of who has what
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {card: data},
      dataType: 'json',
      url: "http://localhost:3000/cards/" + this.id
    }).done(function(response){
      trilloModel.fetchCards();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  }
}
// and the bottom half is pretty much the same as the top half
// except is pertains to the data instead of the response
