function reduce(array, reducer, initialValue) {
  const res;
  if (initialValue) {
    res = initialValue;
  }

  for (ii = 0, ii < array.length. ii++) {
    res = reducer(array[ii], array[(ii + 1)]);
  }
  return res;
}
