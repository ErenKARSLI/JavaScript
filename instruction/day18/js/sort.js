/*
SORT FUNCTION
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/

// arr = [56, 13, 6, 134, 44, 12]
const numberSortASC = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  
  const numberSortDESC = (arr) => {
    return arr.sort((a, b) => b - a);
  };
  
  // ["Ali", "Veli", "Selin", "Şener", "Leyla", "Zeki", "Metin"]
  const stringSortASC = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
  };
  
  const stringSortDESC = (arr) => {
    return arr.sort((a, b) => b.localeCompare(a));
  };
  
  const randomMix = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  
  export default randomMix;
  export {
    stringSortASC,
    stringSortDESC,
    numberSortASC,
    numberSortDESC,
  };