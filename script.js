// Computes simple interest and prints the result into the #result span
function compute() {
    // Read values from the form
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value, 10);

    // Basic validation: principal must be positive
    if (!Number.isFinite(principal) || principal <= 0) {
        // Lab expects this message in Exercise 5
        alert("Enter a positive number");
        // Put cursor back to principal for quick correction
        document.getElementById("principal").focus();
        return;
    }

    if (!Number.isInteger(years) || years <= 0) {
        alert("Enter a positive whole number of years");
        document.getElementById("years").focus();
        return;
    }

    // Simple interest formula: (P * R * T) / 100
    var interest = principal * years * rate / 100;

    // Convert "No. of Years" into a future calendar year
    var year = new Date().getFullYear() + years;

    // Total amount = principal + interest
    var amount = principal + interest;

    // Build the result with DOM nodes so form values are never interpreted as HTML.
    var result = document.getElementById("result");
    result.replaceChildren();

    function appendMarked(value) {
        var mark = document.createElement("mark");
        mark.textContent = value;
        result.appendChild(mark);
    }

    result.append("If you deposit $");
    appendMarked(principal.toFixed(2));
    result.append(", ");
    result.appendChild(document.createElement("br"));
    result.append("at an interest rate of ");
    appendMarked(rate.toFixed(2) + "%");
    result.appendChild(document.createElement("br"));
    result.append("you will receive an amount of $");
    appendMarked(amount.toFixed(2));
    result.append(", ");
    result.appendChild(document.createElement("br"));
    result.append("in the year ");
    appendMarked(year);
    result.appendChild(document.createElement("br"));
}

// Updates the number shown next to the rate slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
