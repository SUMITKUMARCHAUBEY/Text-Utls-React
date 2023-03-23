import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick=()=>{

    let newtext=text.toUpperCase();
   setText(newtext);
   props.showalert('converted to Upper case','success')
  }
  const handleLoClick=()=>{
    
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert('converted to Lower case','success')
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const Copy=(event)=>{
    var text1=document.getElementById('mytext')
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showalert('Text copied','success')
  }
  
  const extspc=()=>{
    let newtext1=text.split(/[ ]+/);
    setText(newtext1.join(" "))
    props.showalert('Extra spaces Removed','success')
  }
  const Clear=()=>{
    setText('')
    props.showalert('Cleared','success')
  }

  const [text, setText] = useState("");
  return (
      
    <>
    <div className="container">
    <div style={{color:props.Mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3" >  
  <label htmlFor="mytext" className="form-label">Example textarea</label>
  <textarea className="form-control" style={{backgroundColor:props.Mode==='dark'?'gray':'white',color:props.Mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2'onClick={Copy}>Copy Text</button>
<button className='btn btn-primary mx-2'onClick={Clear}>Clear</button>
<button className='btn btn-primary m-2'onClick={extspc}>Remove Extra Spaces</button>
    </div>
  
    <div className="container" style={{color:props.Mode==='dark'?'white':'black'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} Words and {text.length} charactors</p>
      <p>It will take {0.008 * text.split(" ").length} Minuts to read</p>
      <h2>Priview</h2>
      <p>{text.length>0?text:"enter somthing to preview it here"}</p>
    </div>
    </div>
    </>
  )
}
