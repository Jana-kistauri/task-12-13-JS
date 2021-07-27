
// davaleba 12-13

// variables
let binnaryToDecimal = '11111111' // -> 255
let decimalToBinnary = '500' // -> 111110100

let convertedDecimal = 0

let remainderNum = 0;
let remainderString
let convertedBinary = ""


// Binnary To Decimal 
// ამოცანის ამოსახსნელად გამოვიყენე ფორმულა: decimal = d0×2^0 + d1×2^1 + d2×2^2 + ...

// ამ ციკლს გადაჰყავს binnaryToDecimal ცვლადში მოცემული
// სტრინგის თითოეული char-ი number ტიპში.
// შემდეგ convertedDecimal-ცვლადში ინახავს მოცემული binnaryToDecimal 
// რიცხვის სათითაო char-ის და 2ის i ხარისხის ნამრავლის ჯამს

for (let i = 0; i < binnaryToDecimal.length; i++) {
    parseInt(binnaryToDecimal[i])
    convertedDecimal += binnaryToDecimal[i] * (2 ** i) 
}
console.log("11111111 in decimals is - " + convertedDecimal)



// Decimal to Binary
// ამოცანის ამოსახსნელად გამოვიყენე შემდეგი საფეხურები:
// Divide the number by 2.
// Get the integer quotient for the next iteration.
// Get the remainder for the binary digit.
// Repeat the steps until the quotient is equal to 0.

decimalToBinnary = parseInt(decimalToBinnary)

while (true){
    
    remainderNum = decimalToBinnary % 2 
    decimalToBinnary = Math.floor(decimalToBinnary / 2) 

    remainderString = remainderNum.toString()
    convertedBinary = convertedBinary + remainderString

    if (decimalToBinnary == 0) {
        break
    }
}   

// ამ კოდში ხდება convertedBinary სტრინგის char-ებად დაშლა, შემდეგ მიღებული სიის 
// შემობრუნება, ამ სიის ერთ სტრინგად გაერთიანება და ბოლოს number ტიპად გარდაქმნა,
// რათა შესაძლებელი იყოს მისი შემგომი გამოყენება სხადასხვა მოქმედებებისას

// convertedBinary = convertedBinary.split("")
// convertedBinary = convertedBinary.reverse()
// convertedBinary = convertedBinary.join("")
// convertedBinary = parseInt(convertedBinary)

convertedBinary = parseInt(convertedBinary.split('').reverse().join(''))

console.log("500 in binary is - " + convertedBinary)

