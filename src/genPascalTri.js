export const pascalTriangle = (rows) => {
	const arr=[[1],[1,1]];
  if(rows >= 2){
    for(let i=2;i<rows;i++){
      arr[i] = new Array(i+1).fill(0);
      arr[i][0] = arr[i][i] = 1;
    }
    for(let row=2;row<rows;row++){
      const prevRow = arr[row-1];
      for(let col=1;col<row;col++){
        arr[row][col] = prevRow[col-1] + prevRow[col]
      }
    }
  }else if(rows === 2){
    return arr;
  }else{
    return arr.slice(0,1)
  }
  return arr;
}
