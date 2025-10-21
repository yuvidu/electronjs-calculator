import React from 'react';
import './index.css';
import { useState } from 'react';
//import { Button } from 'react-bootstrap';

function App() {
    const [input, setInput] = useState('');

    const handleclick = (value) => {
        if (value === 'c'|| value === 'ce') {
            setInput('')
        }
        else if (value === '='){
            try {
                setInput(eval(input))
            } catch (error) {
                setInput('error')
            }
        }
        else {
            setInput((prev)=>prev+value)
        }
    }

    const buttons = [
        [1,2,3,'/'],
        [4,5,6,'*'],
        [7,8,9,'-'],
        [0,'c','=','+']

    ]


    return (
        <div>
            <h1>Calculator</h1>
            <input value={input} readOnly/>
            <div>
                {
                    buttons.map((row,index)=>(
                        <div key={index}>
                            {
                                row.map((value)=>(
                                    <button key={value} onClick={()=>handleclick(value)}>
                                        {value}
                                    </button>
                                ))
                            }
                            
                        </div>
                    ))
                }
            </div>
            <button onClick={()=>handleclick('ce')}>ce</button>
            
        </div>
    );
}

export default App;

