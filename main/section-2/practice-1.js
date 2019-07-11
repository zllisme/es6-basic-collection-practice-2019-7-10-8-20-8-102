'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  for(let i = 0; i < collection.length;) {
    let count = 0;
    for(let value of collection) {
      if(collection[i] == value) {
        count++;
      }
    }
    let map = {};
    map['key'] = collection[i];
    map['count'] = count;
    result.push(map);
    i += count;
  }
  return result;
}
