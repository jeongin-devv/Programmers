const solution = (A : String, B: String) => {
  let answer = 0;
  
  let arrayA : String[] = Array.from(A);
  const length : number = arrayA.length;
  
  let flag = true;
  
  while(flag){
      if(arrayA.join('') === B){
          flag=false;
      }else{
          let last = arrayA[length-1];
          arrayA = arrayA.splice(0,length-1);
          arrayA.unshift(last);
          answer++;
      }
      if(answer>length){
          answer = -1;
          flag=false;
      }
  }
  
  return answer;
}

export default solution;