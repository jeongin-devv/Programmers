const solution = (my_str: String[], n: number) => {
  let answer : any = [];
  let count = Math.ceil(my_str.length/n);
  
  for(let i = 0; i<count; i++){
      answer = [...answer, my_str.slice(i*n,i*n+n)]
  }
  
  return answer;
}

export default solution;