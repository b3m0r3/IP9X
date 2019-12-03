//Реализовать методы, которые в процессе выполнения строки 
//                (2).plus(3).minus(1) дали бы на выходе 4.

//Поскольку, мы работаем с числами, надо расширить прототип
//                                   Number новыми методами.
Number.prototype.plus = function (value) {
	return this + value;
}

Number.prototype.minus = function (value) {
	return this - value;
}

let result = (2).plus(3).minus(1);
console.log(result)