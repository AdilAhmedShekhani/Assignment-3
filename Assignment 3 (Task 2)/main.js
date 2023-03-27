let promptvar = prompt("enter a number");
let promptnumber = Number(promptvar);
let isOddorEven = promptnumber % 2;
console.log(isOddorEven);
if (isOddorEven === 0) {
  alert("The number you enter is" + promptnumber + "even Number");
} else {
  alert("The number you enter is" + promptnumber + "odd Number");
}
