function solution(players, callings) {
    const playersMap = new Map();
    players.forEach((name, index) => {
        playersMap.set(name, index);
    });
    
    callings.forEach((name) => {
        const idx = playersMap.get(name);
        let temp = players[idx - 1];
        
        players[idx -1] = players[idx];
        players[idx] = temp;
        
        playersMap.set(name, playersMap.get(name) - 1);
        playersMap.set(temp, playersMap.get(name) + 1);
    })
    
    return players;
}

export default solution;