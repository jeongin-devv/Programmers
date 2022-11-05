const solution = (cipher : string, code : number) => {
  let answer = '';
  const stringArray = Array.from(cipher);
  
  stringArray.forEach((string,index) => {
      if((index+1)%code === 0){
          answer = answer+string;
      }
  })
  
  return answer;
}

export default solution;