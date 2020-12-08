function cartesianProduct(...arrays) {
    let current = new Array(arrays.length);
    return (function* backtracking(index) {
      if(index == arrays.length) yield current.slice();
      else for(let num of arrays[index]) {
        current[index] = num;
        yield* backtracking(index+1);
      }
    })(0);
  }
  i = 0;
  for (let item of cartesianProduct([20,40,60,80,100],[20,40,60,80,100],[20,40,60,80,100],[20,40,60,80,100])) {
    console.log('[' + item.join(', ') + ']');
   
    i += 1
  }
  console.log(i);
  console.log(myJsonString);
