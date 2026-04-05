function runQ3() {
    var N = parseInt(prompt("Enter N:"));
    var K = parseInt(prompt("Enter K:"));

var answer = -1;

for (var X = 0; X <= 100000; X++) {
    var num = N + X;

    if (num % K === 0) {
        var original = num;
        var reversed = 0;

        while (original > 0) {
            var digit = original % 10;
            reversed = reversed * 10 + digit;
            original = parseInt(original / 10);
        }

        if (num === reversed) {
            answer = X;
            break;
        }
    }
}

alert(answer);
}