import React, { useState } from 'react'



export default function Textbox(props) {
    const handleUpClick = () => {
        // console.log("clicked on uppercase " + text)
        let new_text = text.toUpperCase();
        setText(new_text)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick = () => {
        // console.log("clicked on uppercase " + text)
        let new_text = text.toLowerCase();
        setText(new_text)
        props.showAlert("Converted to LowerCase!","success")

    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const handleCopy = () => {
        let curText=document.getElementById('Box');
        navigator.clipboard.writeText(curText.value)

        setTimeout(() => {
            setCopyText("Copy Text")
        }, 2000);
        setCopyText("Copied! ✅")
        props.showAlert("Copied to Clipboard!","success")

    }
    const confirmClear = () => {
        if(window.confirm("Do you want to clear text?")){
        setText("");
        props.showAlert("Text Cleared!","success")

        }
    }
    // const darkMode = () => {
    //     if (mystyle.color === "white") {
    //         setMystyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMystyle({
    //             color: "white",
    //             backgroundColor: "black"

    //         })
    //         setBtnText("Disable Dark Mode")
    //     }
    // }
    const handleExtraSpaces=()=>{
        let new_text=text.split(/[ ]+/)
        setText(new_text.join(" "))
        props.showAlert("Removed Extra Spaces!","success")

    }

    const [text, setText] = useState("");
    // const [mystyle, setMystyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    // const [btnText,setBtnText]=useState("Enable Dark Mode")
    const [copyText,setCopyText]=useState("Copy Text")

    return (
        <div className='container ' style={{color : props.mode==='dark'? 'white' : 'black'}}>
            <h1>{props.title}</h1>
            <div className="mb-3"  >
           
                <textarea className={`form-control bg-${props.check===true? props.theme : (props.mode==='dark'? '#00244a' : 'white')}`}  value={text} onChange={handleOnChange} id="Box" rows="8" style={{
                    color: props.mode==='dark'? 'white' : 'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={confirmClear}>Clear Text  </button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleCopy}>{copyText}</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 '  onClick={handleExtraSpaces}>Remove extra spaces</button>
            <div className="my-2 text-start" >
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Words and {text.length-text.split(/\s/).length+1} Characters</p>
                <p>Reading Time: {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length * 0.008} min </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
