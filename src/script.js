function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function calculate(option) {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    let result;

    switch (option) {
        case "add": 
            result = add(num1, num2);
            break;
        case "sub":
            result = sub(num1, num2);
            break;
    }
  
    document.getElementById("result").innerText = "Result:" + result;
}

//exporting to jest
if (typeof module !== 'undefined'){
    module.exports = {add, sub};
}

