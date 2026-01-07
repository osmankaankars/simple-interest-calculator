// Computes simple interest and prints the result into the #result span
function compute() {
    // Read values from the form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Basic validation: principal must be positive
    if (principal <= 0) {
        // Lab expects this message in Exercise 5
        alert("Enter a positive number");
        // Put cursor back to principal for quick correction
        document.getElementById("principal").focus();
        return;
    }

    // Simple interest formula: (P * R * T) / 100
    var interest = principal * years * rate / 100;

    // Convert "No. of Years" into a future calendar year
    var year = new Date().getFullYear() + parseInt(years);

    // Total amount = principal + interest
    var amount = parseInt(principal) + parseFloat(interest);

    // Update the UI
    var result = document.getElementById("result");
    result.innerHTML =
        "If you deposit $" + "<mark>" + principal + "</mark>" +
        ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" +
        "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" +
        ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
}

// Updates the number shown next to the rate slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
