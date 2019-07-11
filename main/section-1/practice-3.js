'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
    for(let value of collectionA) {
      if(objectB['value'].indexOf(value) > -1) {
        result.push(value);
      }
    }
    return result;
}
