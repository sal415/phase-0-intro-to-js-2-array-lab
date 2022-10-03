// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {    // y is name here and 
cats.push(name)                                 //here where will it get name from
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){              // do i need a return value bec how will i see info or userz
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
   const appendOfCat = cats.slice()             // y did i have to put it in different constant here
   appendOfCat.push(name)
  return appendOfCat
}

function prependCat(name) {        // y do i put name in prependcat (name)?
    const prependCat = cats.slice()         // when here i left it the same name but in a const
    prependCat.unshift(name)
    return prependCat
}

function removeLastCat(name) {
    const removeLastCat = cats.slice()
        removeLastCat.pop(name)
        return removeLastCat                    //does the tab matter and how does it work
    
}


function removeFirstCat(name) {
    const removeFirstCat = cats.slice()                     // y doesnt const removeFirstCat = cats.shift() work
    removeFirstCat.shift(name)
    return removeFirstCat
}

