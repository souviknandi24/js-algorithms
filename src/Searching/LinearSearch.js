const linearSearch = (arr, ele) => {
  const len = arr.length;
  let pos = -1;
  let i = 0;

  while ((len - i) > 0 && pos < 0) {
    if (arr[i] == ele) pos = i;

    i++;
  }

  return pos;
}

export default linearSearch;
