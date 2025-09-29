function add(a,b) {
    return a + b;
}

function calculate(a, b) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = add(num1, num2);

    document.getElementById("result").innerText = "Result:" + result;
}

if (typeof module !== 'undefined'){
    module.exports = { add };
}

