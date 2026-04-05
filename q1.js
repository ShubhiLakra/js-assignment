function runQ1() {
 var L = parseInt(prompt("Enter L:"));
 var R = parseInt(prompt("Enter R:"));
 var K = parseInt(prompt("Enter K:"));

var count = 0;

for (var x = L; x <= R; x++) {
    if (x % K === 0) {
        var num = x;
        var sum = 0;
        var hasZero = false;

        while (num > 0) {
            var digit = num % 10;

            if (digit === 0) {
                hasZero = true;
                break;
            }

            sum = sum + digit;
            num = parseInt(num / 10);
        }

        if (!hasZero) {
            var isPrime = true;

            if (sum < 2) {
                isPrime = false;
            } else {
                for (var i = 2; i < sum; i++) {
                    if (sum % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                count++;
            }
        }
    }
}

alert("Count = " + count);
}