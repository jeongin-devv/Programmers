const solution = (chicken) => {
  let answer = 0;
// recursion
  const calc = (num) => {
      if( num < 10) return 0;
      const chick = Math.floor(num / 10);
    
      return chick + calc(chick + (num % 10));
  }

  answer = calc(chicken);

// 탐색
  let coupon = chicken;
  
  while(coupon >= 10){
       const temp = Math.floor(coupon/10);
      
       coupon = coupon%10 + temp;
       answer+=temp;
       
  }
  
  return answer;
}

export default solution;