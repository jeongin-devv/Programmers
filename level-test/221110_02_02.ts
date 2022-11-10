const solution = (priorities : number[], location : number) => {
  let answer = 0;
  let temp = 0;
  
  while(true) {
      temp = Math.max(...priorities);
      let n = priorities.shift();
      
      if(n === temp) {
          answer++;
          if(location === 0) break;
      }else{
          priorities.push(n);
      }
      location--;
      
      if(location == -1) {
          location = priorities.length -1;
      }
  }
  
  return answer;
}

export default solution;