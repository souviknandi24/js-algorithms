const bSearch = (arr, l, r, x) => {
  if (r >= l) {
    let mid = parseInt((r + l) / 2);

    if (arr[mid] == x) {
      return mid;
    }
    else if (arr[mid] > x) {
      return bSearch(arr, l, mid - 1, x);
    }
    else {
      return bSearch(arr, mid + 1, r, x);
    }
  }

  return -1;
}

const binarySearch = (arr, ele) => {
  const len = arr.length;
  // we assume that the array is sorted
  return bSearch(arr, 0, len - 1, ele);
}

export default binarySearch;