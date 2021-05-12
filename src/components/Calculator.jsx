import React, { useEffect, useState } from 'react';
import "../static/css/Calculator.css";
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [secInput, setSecInput] = useState([])

    const numClick = e => {
        // if(isNaN(input) && input !== ""){
        //     setInput("")
        //     numClick()
        //     return
        // }
        setInput(`${input}` + e.target.textContent)
    }

    const oppClick = e => {
        if(e.target.textContent === "x"){
            multiplyClick()
            
        } else if(e.target.textContent === "/"){
            divideClick()

        } else if(e.target.textContent === "+"){
            plusClick()

        } else if(e.target.textContent === "-"){
            minusClick()

        } else if(e.target.textContent === "="){
            equalsClick()

        } else if(e.target.textContent === "+/-"){
            negativeClick()

        } else if(e.target.textContent === "."){
            pointClick(input);

        } else if(e.target.textContent === "^"){
            exponentClick()

        } else if(e.target.textContent === "<--"){
            backspaceClick()
        }
    }

    function plusClick(){
        if(input === ""){
            setInput("0")
            plusClick()
            return
        }
        setSecInput([parseFloat(input), "+"])
        setInput("")
    }

    function minusClick() {
        if(input === ""){
            setInput("0")
            minusClick()
            return
        }
        setSecInput([parseFloat(input), "-"])
        setInput("")
    }

    function multiplyClick() {
        if(input === ""){
            setInput("0")
            multiplyClick()
            return
        }
        setSecInput([parseFloat(input), "x"])
        setInput("")
    }

    function divideClick() {
        if(input === "" || input === "0"){
            return
        }
        setSecInput([parseFloat(input), "/"])
        setInput("")
    }

    function exponentClick(){
        if(input === ""){
            return
        }
        setSecInput([parseFloat(input), "^"])
        setInput("")
    }

    function pointClick(currentInput) {
        for(let i = 0; i<currentInput.length; i++){
            if(currentInput.charAt(i) === "."){
                return
            }
        }
        if(input === ""){
            setInput("0.")
        } else {
            setInput(currentInput + ".")
        }
    }

    function equalsClick(){
        if(secInput.length === 2 && input !== ""){
            if(secInput[1] === "+"){
                setInput(parseFloat(input) + parseFloat(secInput[0]))
                setSecInput([])
            } else if(secInput[1] === "-"){
                setInput(parseFloat(secInput[0]) - parseFloat(input))
                setSecInput([])
            } else if(secInput[1] === "/"){
                setInput(parseFloat(secInput[0]/parseFloat(input)))
                setSecInput([])
            } else if(secInput[1] === "x"){
                setInput(parseFloat(secInput[0]*parseFloat(input)))
                setSecInput([])
            } else if(secInput[1] === "^"){
                if(input === "0"){
                    setInput("1")
                    setSecInput([])
                } else if(input === "1"){
                    setInput(secInput[0])
                    setSecInput([])
                } else {
                    var temp = secInput[0]
                    for(let i=1; i<input;i++){
                        temp *= secInput[0]
                    }
                    setInput(temp)
                    setSecInput([])
                }
            }
        } 
    }

    function backspaceClick(){
        if(input.toString().length > 0){
            var temp = ""
            for(let i=0; i<input.toString().length-1;i++){
                temp += input.toString()[i]
            }
            if(temp === ""){
                temp = "0"
            }
            setInput(temp)
        }
    }

    function negativeClick(){
        if(input > 0){
            var temp = input.toString()
            temp = `-${temp}`
            setInput(temp)
        } else if(input < 0){
            var temp = input.toString()
            var temp2 = ""
            for(let i=0; i<temp.length;i++){
                if(temp[i] !== "-"){
                    temp2 += temp[i]
                }
            }
            setInput(temp2)
        }
    }

    useEffect(() => {
        console.log(`input : ${input}`)
        console.log(`secInput : ${secInput}`)
        console.log(isNaN("/"))
    })

    return (
        <div className="calculator">
            <div className="calculatorScreen">
                <div className="calculatorScreen--input">
                    <form>
                        <input 
                            placeholder="0"
                            value={input}
                        />

                    </form>
                </div>
            </div>

            <div className="calculatorButtons">
                <Button 
                    value="<--"
                    onClick={oppClick}
                />
                <Button 
                    value="C"
                    onClick={() => {
                        setInput("")
                        setSecInput([])
                    }}
                />
                <Button 
                    value="^"
                    onClick={oppClick}
                />
                <Button 
                    value="/"
                    onClick={oppClick}
                />
                <Button 
                    value="7"
                    onClick={numClick}
                />
                <Button 
                    value="8"
                    onClick={numClick}
                />
                <Button 
                    value="9"
                    onClick={numClick}
                />
                <Button 
                    value="x"
                    onClick={oppClick}
                />
                <Button 
                    value="4"
                    onClick={numClick}
                />
                <Button 
                    value="5"
                    onClick={numClick}
                />
                <Button 
                    value="6"
                    onClick={numClick}
                />
                <Button 
                    value="-"
                    onClick={oppClick}
                />
                <Button 
                    value="1"
                    onClick={numClick}
                />
                <Button 
                    value="2"
                    onClick={numClick}
                />
                <Button 
                    value="3"
                    onClick={numClick}
                />
                <Button 
                    value="+"
                    onClick={oppClick}
                />
                <Button 
                    value="+/-"
                    onClick={oppClick}
                />
                <Button 
                    value="."
                    onClick={oppClick}
                />
                <Button 
                    value="0"
                    onClick={numClick}
                />
                <Button 
                    value="="
                    onClick={oppClick}
                />
            </div>
        </div>
    )
}

export default Calculator
