let value = document.getElementById('input').innerHTML;
let result =  document.getElementById('result').innerHTML;
let number = document.getElementsByClassName('number');
let symbol = document.getElementsByClassName('symbol');


function showValue(params) {
    return document.getElementById('input').innerHTML=params;
}


function showResult(params) {
    return document.getElementById('result').innerHTML=params;
}


for (let index = 0; index < number.length; index++) {
    
    number[index].addEventListener('click', () => {
        value =  value + number[index].id;
        showValue(value);
        showResult('');
    })
}


for (let index = 0; index < symbol.length; index++) {

    symbol[index].addEventListener('click', () => {

        if (symbol[index].id === 'allClear') {
            value = "";
            result = "";
            showValue(value);
            showResult(value);
        }

        else if (symbol[index].id === 'cleared') {
            value= value.toString()
            value = value.substring(0,value.length-1);
            showValue(value);
        }

        else {
            value = value + symbol[index].id;
            showValue(value);

            if (symbol[index].id === '=') {
                value= value.toString()
                value = value.substring(0,value.length-1);
                showValue(value);
 
                try {
                    showResult(eval(value))
                } catch (err) {
                    if (err instanceof SyntaxError) {

                        console.log(err.message);
                        showResult('syntax error!')

                    }
                } 
                value = "";
                result = ""; 
            }
            
        }
    })
}

