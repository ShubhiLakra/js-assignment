function runQ6() {
    var a = parseInt(prompt("Enter correct answers (a):"));
    var b = parseInt(prompt("Enter partially correct answers (b):"));
    var c = parseInt(prompt("Enter wrong answers (c):"));

var score = 3 * a + b - 2 * c;

// If score becomes negative, replace with 0
if (score < 0) {
    score = 0;
}

// If total submissions > 50, subtract 10
if (a + b + c > 50) {
    score = score - 10;
}

// Optional safety: if score becomes negative after subtracting 10
if (score < 0) {
    score = 0;
}

var status;

if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

alert(score, status);
}