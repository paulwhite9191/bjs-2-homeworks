"use strict"

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}
	const avg = (sum / arr.length).toFixed(2);

	return {
		min,
		max,
		avg: +avg
	};
}


function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum;
}


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	const minValue = Math.min(...arr);
	const maxValue = Math.max(...arr);
	let difference = (maxValue - minValue);

	return difference;
}


function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const workerResult = func(...arrOfArr[i]);

		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;

		}
	}
	return maxWorkerResult;
}
