const solution = (n: number, lost: number[], reserve: number[]) => {
    let answer = 0;
    const realReserve = reserve.filter(r => !lost.includes(r)).sort((a,b) => a-b);
    const realLost = lost.filter(r => !reserve.includes(r)).sort((a,b) => a-b);

    const ableNum = realLost.filter(a => {
        return realReserve.find((b, i) => {
            const has = b === a-1 || b === a+1;
            if (has) {
                delete realReserve[i];
            }
            return has;
        });
    }).length;
    
    answer = n - (realLost.length - ableNum)
    return answer;
}

export default solution;