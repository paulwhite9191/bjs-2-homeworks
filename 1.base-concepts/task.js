"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b * b - 4 * a * c;

	if (discriminant < 0) {
		  return arr;
	} else if (discriminant === 0) {
		  const root = -b / (2 * a);
		  arr.push(root);
		  return arr;
	} else {
		  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		  arr.push(root1, root2);

		  return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (
		typeof percent !== "number" ||
		typeof contribution !== "number" ||
		typeof amount !== "number" ||
		typeof countMonths !== "number"
	) {
		return false;
	}

	percent = percent / 100;
	const bodyCredit = amount - contribution;

	const monthlyInterest = percent / 12;
	const exponentiation = Math.pow(1 + monthlyInterest, countMonths);
	const monthlyPayment = bodyCredit * (monthlyInterest + monthlyInterest / (exponentiation - 1));

	const totalPayment = monthlyPayment * countMonths;
	const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

	return roundedTotalPayment;
}