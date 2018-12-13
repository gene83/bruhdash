var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, x) {
    return arr.indexOf(x);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, x) {
    return arr.lastIndexOf(x);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
   return arr.filter(value => !!value);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, index1, index2) {
    return arr.slice(index1,index2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (n === undefined) {
      arr.shift();
    } else {
      arr.splice(0, n);
      // return arr.slice(n) also works
    }
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === undefined) {
      arr.pop();
    } else {
      arr.splice(arr.length - n, arr.length);
    }
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined) {
      return arr.slice(0, 1);
    } else {
      return arr.slice(0, n)
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (n === undefined) {
      return arr.slice (arr.length - 1, arr.length);
    } else {
      return arr.slice(arr.length - n, arr.length);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {

    if (start === undefined && end === undefined) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = val;
      };
    } else {
      for (let i = start; i < end; i++) {
        arr[i] = val;
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, value1, value2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value1 || arr[i] === value2) {
        arr.splice(i,1);
        i--
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indexes) {
    /*  for (let i = 0; i < arr.length; i++) {
        if (indexes.includes(i)) {
          arr.splice(i, 1)
        }
      }
      return arr;
      above doesn't work because its based on indexes and they change with every splice, 
      I want to use splice to mutate the original array though
      */
  },

  // creates an array excluding all the specified values
  without: function(arr, value1, value2) {
    return arr.filter(value => ![value1, value2].includes(value));
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    return arr.filter(val => !values.includes(val));
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
