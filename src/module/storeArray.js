const storeArray = (arr) => {
  const arrToLoad = localStorage.setItem('arraylist', JSON.stringify(arr));
  return arrToLoad;
};

export default (storeArray);