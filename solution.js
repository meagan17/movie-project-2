/****************************************************
1. Create an array called movieQueue with at least two Movie Names as strings
****************************************************/
var movieQueue = ["The Godfather", "Scarface"];


/****************************************************
2. Create a function called addMovieToEnd
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the end of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/
function addMovieToEnd (anyMovie){
  movieQueue.push(anyMovie);
  return anyMovie;
}


/****************************************************
3. Create a function called addMovieToFront
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the front of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/
function addMovieToFront (anyMovie){
  movieQueue.unshift(anyMovie);
  return anyMovie;
}


/****************************************************
4. Create a function called changeMovie
- Your function should take two parameters. The first parameter should be an index, 
  and the second should be the name of the movie to add
- It should add the new movie name to the movieQueue array at the given index.
- Finally it should return the movie name it just added
****************************************************/
function changeMovie (location, newmovie){
  movieQueue [location] = newmovie;
  return newmovie;
}


/****************************************************
5. Create a function called getMovie
- Your function should take one parameter, the index of the movie you want to get
- If the index is valid (meaning that it's less than the number of items in the array), 
  it should return the name of the movie at that index in the array movieQueue
- If the index is not valid (meaning that it's larger than the number of items in the array),
  it should return the string "not a valid index"
****************************************************/
function getMovie (index){
  if (index < movieQueue.length){
    return movieQueue [index];
  }
  else{
    return ("not a valid index");
  }
}

/**************************
 PASTE YOUR CODE FROM LAST WEEK ABOVE THIS COMMENT BLOCK
 ***************************/
/****************************************************
6. Create a function called isLengthGreaterThan
- Your function should take one parameter, a number (call it "length")
- If movieQueue's length is greater than length, return true
- If movieQueue's length is less than or equal to length, return false
****************************************************/
function isLengthGreaterThan(length){
 if (movieQueue.length > length){
  return true;
 }
 else{
  return false;
 }
}
/****************************************************
7. Create a function called addMoviesToEnd()
- Your function should take no parameters.
- Create an array with three movie names (strings) in it
- Loop over this array, and add each movie in it to the queue using addMovieToEnd()
- Return the array you created
****************************************************/
function addMoviesToEnd(){
 var array = ["Terminator", "Godzilla", "Kingkong"];
  for (var i = 0; i < array.length; i++){
   addMovieToEnd(array[i])
  }
   return array;
}
 
/****************************************************
8. Create a function called findMovie
- Your function should take one parameter, the name of the movie you want to look for
- If the movie is in the array, it should return true
- If the movie is not in the array, it should return false
****************************************************/
function findMovie(criminal){
 for (var i = 0; i < movieQueue.length; i++){
    if(movieQueue[i] === criminal){
        return true;
    } 
    else{
        return false;
    }
 }
 
}

 /****************************************************
 9. Create a function called listMovies
- Your function should take no parameters
- It should loop over all of the movies in the movieQueue, and return the string:
 "Here are the current movies: <value of movieQueue[0]>, <value of movieQueue[1]>, "
****************************************************/
function listMovies(){
    for (var i = 0; i < movieQueue.length; i++){
        return ("Here are the current movies: " + movieQueue[0]+", "+ movieQueue[1]+ ", "  + movieQueue[2]+ ", " );
    }
}
 

 
