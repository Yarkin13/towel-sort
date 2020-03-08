
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
}
  for(let i=1; i<matrix.length; i++){
   if(i%2){
     matrix[i].reverse();
   }
 }
 let matrix1=matrix.join(',').split(',');
  for (let i=0;i<matrix1.length;i++){
    matrix[i]=+matrix1[i];
  }
  return matrix
 }


