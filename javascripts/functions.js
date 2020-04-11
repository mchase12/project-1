// jshint esversion: 6

// Req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

//test
let my_array = [0,5,4,10]
arrAvg(my_array)
//answer


//Req. 3c
let arrMax = (arr) => {
  var max=arr[0]
  arr.forEach(x => {
    if(x > max) {
      max = x;
    }
  });
  return max;
}

//test
arrMax([1,2,3,4,]) //4
