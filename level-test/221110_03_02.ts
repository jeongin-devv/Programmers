const solution = (n : number, paths : number[][], gates: number[], summits: number[]) => {
    let answer = [];

    const axisMap = new Array(n+1).fill(null).map(() => []);

    paths.forEach(([a,b,width]) => {
        axisMap[a].push([width,b]);
        axisMap[b].push([width,a]);
    });

    summits.forEach((summit) => {
        axisMap[summit] = [];
    });

    let temp : any = gates;
    const intensityArray = new Array(n+1).fill(10000000);

    gates.forEach(value => intensityArray[value] = '');

    while(temp.length > 0){
        let set = new Set();
        while(temp.length > 0){
            const lastValue = temp.pop();
            for(let [width,b] of axisMap[lastValue]){
                const maxV = Math.max(intensityArray[lastValue],width);
                if(intensityArray[b] > maxV){
                    intensityArray[b] = maxV;
                    set.add(b);
                }
            }
        }
        temp = [...set];
    }

    const result = summits.map(value => [value,intensityArray[value]]).sort((a,b) => {
        if(a[1] === b[1]){
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });

    answer = result.shift()

    return answer;
}

export default solution;