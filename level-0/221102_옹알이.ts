const solution = (babbling : String[]) => {
  let answer = 0;
  const verbs = ["aya", "ye", "woo", "ma"];
  const resultArray = babbling.filter((word : String ) => {
      let prefix = word;
      verbs.forEach((verb) => {
          prefix = prefix.replace(verb,"대체자");
      });
      
      prefix = prefix.replace(/대체자/g,"");
      
      if(prefix===""){
          return true;
      }else {
          return false;
      }
  });
  
  answer = resultArray.length;
  
  return answer;
}

export default solution;