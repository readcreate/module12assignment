// Anshul Kumar's Module 12 assignment for Comp 690 at SDCCE in spring 2024

// STEP 1
// class Cat { // named
//     constructor() {
      
//     }
// }

// const Dog = class { // anonymous
//     constructor() {
      
//     }
// }
  

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// class Animal {
// 	constructor() {
		
// 	}
// 	displayMessage = function() {
// 		console.log(`The Animal has been created`)
// 	}
// }
// const animal1 = new Animal()
// animal1.displayMessage()


// STEP 4
// class Animal {
// 	constructor(message) {
// 		console.log(message)
// 	}
// }
// const animal1 = new Animal("This message should show up in the console.") 

// STEP 5
// class Animal {
// 	constructor(type, breed, color, height, length) {
//         this.type = type
// 		this.breed = breed
// 		this.color = color
//         this.height = height // in feet
//         this.length = length // in feet
// 	}
// }
// const myAnimal = new Animal('dog','big','red',2,3)


// STEP 6
// class Animal {
// 	constructor(type, breed, color, height, length) {
//         this.type = type
// 		this.breed = breed
// 		this.color = color
//         this.height = height // in feet
//         this.length = length // in feet
// 	}
//     displayAllProperties = function() {
//         // source consulted: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//         for (const property in this) {
//             if (typeof(this[property])!='function') {
//                 console.log(`${property}: ${this[property]}`);
//             }
//           }
//     }
// }
// const myAnimal = new Animal('dog','big','red',2,3)
// myAnimal.displayAllProperties()

// STEP 7 
// class Animal {
// 	constructor(type, breed, color, height, length) {
//         this.type = type
// 		this.breed = breed
// 		this.color = color
//         this.height = height // in feet
//         this.length = length // in feet
//         this.speak() // calls speak method automatically during instantiation; comment out if not wanted
// 	}
//     speak = function() {
//         if (this.type==="dog") {
//             console.log(`The ${this.color} dog is barking!`)
//         } else if (this.type==="cat") {
//             console.log(`The ${this.color} cat is meowing!`)
//         }
        
//     }
// }
// const clifford = new Animal('dog','big red','red',15,25)
// const chester = new Animal('cat','Cheeto promoter','orange',6,2)

// clifford.speak() // call speak method any time you want like this
// chester.speak() // call speak method any time you want like this

// STEP 8 - I couldn't figure out a way to do this with ES6 class definition and still have my variables stay private

// function Animal(type, breed, color, height, length) {
// 	let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length

// 	let checkType = function() { // Private Method
// 		return _type
// 	}
// 	this.speak = function() { // Public Method
// 		console.log(`The ${checkType()} has made a noise!`)
// 	}
// }

// const puff = new Animal('dog','tv dog','brown',1,1.5)
// puff.speak()
// const tom = new Animal('cat','upright jerry chaser','black and white',2.5,1)
// tom.speak()

// STEP 9
// String.prototype.findWords = function(searchTerm) { 
//     let re = new RegExp(String.raw`${searchTerm}`, "g"); // source consulted: https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
//     matches = this.match(re)
//     if (!!matches) { // source consulted: https://stackoverflow.com/questions/2422946/javascript-check-for-not-null
//         // matches is NOT null, meaning one or more match exists
//         console.log(`Number of matches found: ${matches.length}`)
//     } else { 
//         // matches is YES null, meaning 0 matches exist
//         console.log('No matches were found')
//     }
// }
// 'the the it it it and'.findWords('it') // 3 matches
// 'the the it it it and'.findWords('clifford') // no matches