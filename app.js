const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const calcul = document.getElementById('display');
var ans = null;
var done = false;
buttons.forEach(e => {
    e.addEventListener('click', () => {
        calculator(e);
    });
})
cos = Math.cos;
tan = Math.tan;
sin = Math.sin;
pi = Math.PI;
log = Math.log;
ln = Math.LN10;
sqrt = Math.sqrt;
acos = Math.acos;
asin = Math.asin;
atan = Math.atan;
function calculator(btn){
    switch(btn.value){
        case 'DEL':
            if(result.innerText[result.innerText.length -1 ] == "S" || result.innerText[result.innerText.length -1 ] == "N" || result.innerText[result.innerText.length -1 ] == "G"){
                result.innerText = result.innerText.substring(0, result.innerText.length -3);
            } else if (result.innerText[result.innerText.length -1 ] == "T"){
                result.innerText = result.innerText.substring(0, result.innerText.length -4); 
            } else {
                result.innerText = result.innerText.substring(0, result.innerText.length -1);
            }
            break;
        case 'AC':
            result.innerText = "";
            calcul.innerText = "";

            break;
        case '2ND':
            break;
        case 'α':
            console.log('Alpha');
            break;
        case 'fx':
            result.innerText += btn.innerText + "(";
            break;
        case '=':
            calcul.innerText = result.innerText;    
            try {
                let resultat = parseFloat(eval(result.innerText.toLowerCase().replace('π', 'pi')))
                if(resultat <= 1e-10){
                    result.innerText = resultat.toFixed(1);
                } else {
                    result.innerText = resultat;

                }    
                ans = result.innerText;
                done = true;
            } catch (err) {
                if (err){
                    result.innerText = "Error";
                    done = true;
                }
                throw err;
            }

            break;
        default:
            if (done==true){
                if ((btn.value == "*" || btn.value == "/" )) {
                    result.innerText = "ans" + btn.value;
                    calcul.innerText = ans;

                    done = false;
                } else {
                    result.innerText = "";
                    calcul.innerText = ans;
                    result.innerText += btn.value;
                    done = false;
                }
            } else {
                if((btn.value == "*" || btn.value == "/" ) && result.innerText == ""){
                    result.innerText = "ans" + btn.value;
                    calcul.innerText = btn.value;
                } else {
                    result.innerText += btn.value
                }
            }
    }
}