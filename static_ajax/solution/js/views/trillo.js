var TrilloView = function(trilloModel){
  // the following is the definition of the trillo model - each 'this'
  // is fairly self explainatory.
  var newCardButton = document.querySelector("#new-card-button")
  this.newCardText = document.querySelector("#new-card-text")
  this.toDoList = document.querySelector("#todo-column .card-list")
  this.doneList = document.querySelector("#completed-column .card-list")
  this.model = trilloModel
  newCardButton.addEventListener("click", this.addCard.bind(this))
  this.render()
}

TrilloView.prototype = {
  addCard: function(event){
    // when an event (laydown or picking of cards), the value is evaluated
    event.preventDefault();
    var description = this.newCardText.value;
    var card = new Card(null, description, false);
    // the 3 attributes only need the description and not the id or if completed
    card.save();
    this.render()
  },
  render: function(){
    // silliness of the toDoList from another
    this.toDoList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.cards.length; i++){
      var cardView = new CardView(this.model.cards[i])
      if(this.model.cards[i].completed){
        this.doneList.appendChild(cardView)
      }
      else{
        this.toDoList.appendChild(cardView)
      }
    }
  }
}
