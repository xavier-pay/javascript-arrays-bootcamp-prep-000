var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// add element at beginning

function addElementToBeginningOfArray(array, element){
  var array = []
  array.unshift(element)
}
//addElementToBeginningOfArray([1], 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = []
  array[0] = element
}
destructivelyAddElementToBeginningOfArray('foo', [1])
