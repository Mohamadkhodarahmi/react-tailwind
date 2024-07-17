import {useEffect, useRef, useState} from 'react'


import './App.css'

export default function App() {
    const [display, setDisplay] = useState('0')
    const [operand, setOperand] = useState(null)
    const [operator, setOperator] = useState(null)

    const pressButton = (value)=>{
        if (display==='0'){
            setDisplay(value);
        }
        else {
            setDisplay(display + value)
        }
    }

    const pressOperator= (operation)=>{
        setOperand(parseFloat(display))
        setOperator(operation)
        setDisplay('0')
    }

    const calculator = ()=>{
        const number = parseFloat(display)
        switch (operator){
            case '+':
                setDisplay((operand + number).toString());
                break;
            case '-':
                setDisplay((operand + number).toString());
                break;
            case '*':
                setDisplay((operand + number).toString());
                break;
            case '/':
                setDisplay((operand + number).toString());
                break;
        }
        setOperator(null)
        setOperand(null)
    }


    return (
        <div className='firs'>

            <h2><h1>{display}</h1></h2>
            <div className='main'>
                <button onClick={()=>pressButton('1')}>1</button>
                <button onClick={()=>pressButton('2')}>2</button>
                <button onClick={()=>pressButton('3')}>3</button>
                <button onClick={()=>pressButton('4')}>4</button>
                <button onClick={()=>pressButton('5')}>5</button>
                <button onClick={()=>pressButton('6')}>6</button>
                <button onClick={()=>pressButton('7')}>7</button>
                <button onClick={()=>pressButton('8')}>8</button>
                <button onClick={()=>pressButton('9')}>9</button>
                <button onClick={()=>pressOperator('+')}>+</button>
                <button onClick={()=>pressOperator('-')}>-</button>
                <button onClick={()=>pressOperator('*')}>*</button>
                <button onClick={()=>pressOperator('/')}>/</button>
                <button onClick={calculator}>=</button>
            </div>

        </div>)
}


