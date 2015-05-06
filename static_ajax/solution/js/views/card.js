var CardView = function(card){
  this.card = card
  // define CardView function for the card.
  this.container = document.createElement("div")
  // create a division then a Class, the a paragraph (p)
  this.container.className = "card"
  this.description = document.createElement("p")
  this.description.innerHTML = card.description
  // the 'storage' area hidden in the elements of the code (child)
  this.container.appendChild(this.description)
  var input = document.createElement("input")
  // button to help user
  input.type = "checkbox"
  input.checked = card.completed
  // show the box as completed
  input.className = "finish"
  // after finishing this class, the internet medium (console) listens for a click of a button and then performs more code
  input.addEventListener("click", function(){
    var completed = input.checked ? true : false
    card.update({completed: completed});
  })
  // bind it so other pages can see (or hear) the click.
  this.description.addEventListener("click", this.editCard.bind(this))
  this.container.appendChild(input)
  // then put that edited Card in a storage container
  return this.container
}

CardView.prototype = {
  editCard: function(event){
    // function event for editing the Card all belonging to the prototype CardView
    var input = document.createElement("input")
    // so when this input for the new Element is input, then the description of the value of the card is shown
    input.value = this.description.innerHTML
    this.container.removeChild(this.description)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
    // ah-oh, once you get 13 cards, the value become updated and then rendered (shown) and then bound (bind)
      if (event.keyCode == 13){
        var value = input.value
        this.card.update({description:value})
        trilloView.render()
      }
    }.bind(this) )
  }
}
