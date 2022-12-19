import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('');
   
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase! ", "success")
    };
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase! ", "success")
    };
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert(" Text Cleared! ", "success")
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      };

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    };

    const handleCopy = () => {
        let text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard! ", "success")
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed! ", "success")
    };
    
    // text = "new text"; // wrong way to use this state
    // setText("new text"); // correct way to use this state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark'?'#212529':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-info mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-warning mx-1 my-2" onClick={speak} type="submit">Speak</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} Words, {text.length} Characters</p>
        <p> {0.008 * text.split(' ').length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to textbox above to preview it here"}</p>
    </div>
    </>
    )
};