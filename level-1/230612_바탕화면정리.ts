const solution = (wallpaper) => {
    const xTemp = [];
    const yTemp = [];
    
    wallpaper.forEach((row, xIndex) => {
        Array.from(row).forEach((word, yIndex) => {
            if(word === '#') {
                xTemp.push(xIndex);
                yTemp.push(yIndex);
            }
        })
    })
    
    const xMin = Math.min(...xTemp);
    const xMax = Math.max(...xTemp)+1;
    const yMin = Math.min(...yTemp);
    const yMax = Math.max(...yTemp)+1;
    
    return [xMin, yMin, xMax, yMax];
}

export default solution;