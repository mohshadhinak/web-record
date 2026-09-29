function calculate(operator) {

    // Get the values from the input fields
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result;

    // Perform the selected operation
    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;

        case "%":
            if (num2 === 0) {
                result = "Cannot find modulus with zero";
            } else {
                result = num1 % num2;
            }
            break;
    }

    // Display the result on the webpage
    document.getElementById("result").textContent =
        "Result: " + result;
}
