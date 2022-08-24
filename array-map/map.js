function map(array, transform) {
  let result = [];
  for (ii = 0, ii < array.length, ii++) {
    const res = transform(array[ii]);
      result.push(res);
  }
}
