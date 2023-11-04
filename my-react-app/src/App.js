import {useState } from 'react';
import React from 'react';
import './App.css';


function App() {
  let [result, setresult]=useState ("");

   const clickHandler=(event)=>{
    setresult(result.concat(event.target.value))

   }
   const clearnumber=()=>{
    setresult("");
   }
   const calculate=()=>{
    setresult(eval(result).toString());
   }

  const calo ={
      width: "350px"
      ,margin:"100px auto"
  }
  return (
    <div style={calo}>
      <input type="text" placeholder="0" id="abc" value={result}/>
      <input type="button" value="9"  className='button'onClick={clickHandler}/>
      <input type="button" value="8"  className='button'onClick={clickHandler}/>
      <input type="button" value="7" className='button' onClick={clickHandler}/>
      <input type="button" value="6"  className='button'onClick={clickHandler}/>
      <input type="button" value="5" className='button'onClick={clickHandler} />
      <input type="button" value="4" className='button' onClick={clickHandler}/>
      <input type="button" value="3" className='button' onClick={clickHandler}/>
      <input type="button" value="2" className='button'onClick={clickHandler} />
      <input type="button" value="1"  className='button'onClick={clickHandler}/>
      <input type="button" value="0" className='button'onClick={clickHandler} />
      <input type="button" value="." className='button' onClick={clickHandler}/>
      <input type="button" value="+" className='button'onClick={clickHandler} />
      <input type="button" value="-" className='button' onClick={clickHandler}/>
      <input type="button" value="*" className='button'onClick={clickHandler} />
      <input type="button" value="/" className='button'onClick={clickHandler} />
      <input type="button" value="%" className='button' onClick={clickHandler}/>
      <input type="button" value="Clear" className='button' id='button1'onClick={clearnumber}/>
      <input type="button" value="=" className='button' id='button1' onClick={calculate}/>
    </div>
  );
}
export default App;
