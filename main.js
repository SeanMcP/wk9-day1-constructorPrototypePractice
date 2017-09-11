//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungerBool, owner) {
  this.status = status
  this.color = color
  this.hungry = hungerBool
  this.owner = owner
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('normal', 'black', false, 'mason')
let moonshine = new Dog('normal', 'brown', true, undefined)
let atticus = new Dog('normal', 'spotted', true, undefined)

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (coolBool) {
  this.cool = coolBool
  this.pet = function(dog) {
    dog.status = 'happy'
  }
  this.feed = function(dog) {
    dog.hungry = false
  }
}

// Instances of Human
// Needed: mason, julia

let julia = new Human(true)
let mason = new Human(false)
