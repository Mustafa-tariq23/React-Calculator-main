import React,{useState} from 'react'
import {evaluate} from 'mathjs';

export const Calculator = () => {
const [inputandresult, setInput] = useState('');
function clearResult(){
    setInput('');
}
function DeleteChar(){
    var result = inputandresult;
    setInput(result.slice(0, -1));
}
function CalculateResult(){
    try {
        setInput(evaluate(inputandresult).toString());
    } catch (error) {
        setInput('Error');
    }
}
function HandleClick(value){
    if(value==='%'){
        setInput((previousInput) => previousInput/100);
    }
    else{
    setInput((previousInput) => previousInput + value);
    }

}

return (
    <div className="body">
    <div className="cont">
    <div className="container">
    <div className="screen">
        {inputandresult}
    </div>
    <div id="cal-button">
    <button className="btn" onClick={()=>HandleClick('%')}>%</button>
    <button className="btn" onClick={()=>HandleClick('/')}>÷</button>
    <button className="btn" onClick={()=>clearResult()}>AC</button>
    <button className="btn" onClick={()=>DeleteChar()}>Del</button>
    <button className="btn" onClick={()=>HandleClick('7')}>7</button>
    <button className="btn" onClick={()=>HandleClick('8')}>8</button>
    <button className="btn" onClick={()=>HandleClick('9')}>9</button>
    <button className="btn" onClick={()=>HandleClick('*')}>x</button>
    <button className="btn" onClick={()=>HandleClick('4')}>4</button>
    <button className="btn" onClick={()=>HandleClick('5')}>5</button>
    <button className="btn" onClick={()=>HandleClick('6')}>6</button>
    <button className="btn" onClick={()=>HandleClick('-')}>-</button>
    <button className="btn" onClick={()=>HandleClick('1')}>1</button>
    <button className="btn" onClick={()=>HandleClick('2')}>2</button>
    <button className="btn" onClick={()=>HandleClick('3')}>3</button>
    <button className="btn" onClick={()=>HandleClick('+')}>+</button>
    <button className="btn" onClick={()=>HandleClick('0')}>0</button>
    <button className="btn" onClick={()=>HandleClick('00')}>00</button>
    <button className="btn" onClick={()=>HandleClick('.')}>.</button>
    <button className="btn" onClick={()=>CalculateResult()}>=</button>
    </div>
    </div>
    </div>
    </div>
);
}
export default Calculator;