"use strict"

function compareArrays(arr1, arr2) {
    if (
        arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index])
      ) {
        return true;
      }
      return false;

}


function getUsersNamesInAgeRange(users, gender) {
	let result = users
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((sum, age, index, array) => sum + age / array.length, 0);
	return result;

}