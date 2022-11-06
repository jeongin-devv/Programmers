const solution = (score : number[][]) => {
  let answer = [];
  
  const avgArray = score.map((array) => 
      array.reduce((a,b) => a+b)/array.length);
  
  const rankArray = [...avgArray].sort((a,b) => b - a)
              .map((a,index) => {return {rank:index+1, avg:a}})
              .map((aa,index, array) => 
                  index > 0 && aa.avg === array[index - 1].avg 
                      ? {...aa, rank:array[index-1].rank}
                      : aa
              );
  
  answer = avgArray.map((avg) => rankArray.find((obj) => avg===obj.avg).rank)

  return answer;
}

export default solution;