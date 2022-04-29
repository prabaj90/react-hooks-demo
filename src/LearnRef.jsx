import React , {useRef, useState}from 'react'

export default function LearnRef() {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const onClear = ()=>{
        setValue(inputRef.current.value);
        inputRef.current.value="";
        inputRef.current.focus();
    }
  return (
    <div><input type="text" placeholder='Change the text' ref={inputRef}/>
    <button onClick={onClear}>Clear</button>
    {value}
    </div>
  )
}
