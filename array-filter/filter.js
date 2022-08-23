function filter(array, predicate) {
  let result = [];
  for (ii = 0, ii < array.length, ii++) {
    const res = predicate(array[ii]);
    if (res) {
      result.push(res);
    };
  }
}
