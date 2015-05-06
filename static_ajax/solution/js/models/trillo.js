var Trillo = function(){
  // the variable 'Trillo' (capitalized) is the same as the function.
  this.cards = []
  // Trillo cards are taken from an array
  this.fetchCards();
}

Trillo.prototype = {
  fetchCards: function(callback) {
    // the callback is where ajax starts making promises (.done)
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/cards"
    }).done(function(response) {
      trilloModel.loadCards(response);
      trilloView.render();
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadCards: function(response) {
    this.cards = [];
    // the instance variable is zeroed out and then given two and as long as the response length
    // is less than the required number
    for(var i = 0; i < response.length; i++){
      // this is a lot of stuff - for each response of a new card, the attributes are included
      var card = new Card(response[i].id, response[i].description, response[i].completed);
      // and all of that is simply pushing cards (and all the attributes of each card)
      this.cards.push(card);
    }
  }

}
