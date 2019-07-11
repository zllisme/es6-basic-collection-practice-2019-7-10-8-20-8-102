'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  for(let value of collectionA) {
  	if(collectionB[0].indexOf(value) > -1) {
  		result.push(value);
  	}
  }
  return result;
}
