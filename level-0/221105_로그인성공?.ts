const solution = (id_pw : String[], db : String[][]) => {
  let answer = '';
  const [id, pw] = id_pw;
  
  if(!db.find(([db_id]) => db_id===id)) answer = 'fail';
  if(db.find(([db_id]) => db_id===id)) answer = 'wrong pw';
  if(db.find(([db_id,db_pw]) => db_id===id && db_pw===pw)) answer = 'login';

  return answer;
}

export default solution;