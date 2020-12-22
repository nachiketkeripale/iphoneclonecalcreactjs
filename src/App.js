import {React,useState,useEffect,useRef} from 'react';
import './App.css';

function App() {

  const [result,addVal]=useState("");

  const inputRef = useRef(null);

  //useEffect(()=>inputRef.current.focus());

  function handelClick(event) {
    try
    {
    if(result=="ERROR")
    {
      addVal(""+event.target.name).toString();
    }
    else if(result=="0")
    {
      addVal(""+event.target.name).toString();
    }
    else
    {
      addVal(result.concat(event.target.name).toString());
    }
  }catch(error)
  {
    alert(error);
  }
  }

  function postoneg() {
    try
    {
      var val = parseFloat(result.toString());
      
      if(val>0)
      {
        var final = -Math.abs(val);
        
        addVal(final.toString());
      }
      else
      {
        var final = Math.abs(val);
        
        addVal(final.toString());
      }

    }catch(error)
    {
      alert(error);
    }

  }

  function allclear() {
    addVal("");
  }

  function calculate() {
    try
    {
      addVal(eval(result).toString());
    }catch(error)
    {
      addVal("ERROR")
    }
    
  }

  function percentage() {
    try
    {
      addVal((result/100).toString())
    }catch(error)
    {
      alert(error);
    }
    
  }
  return (

    <>
   
        <div className="Header">
            <h1>iPhone Clone Calculator</h1> 
            <p>Designed & Developed by @ Nachiket Keriaple </p>
                    <p>keripalenachiket@gmail.com</p>
        </div>

        <div className="MainContent">
              <div className="backgroundimg">
              <div className="centeralign">
                <div className="OutputField">
                  <input type="text"value={result} ></input> 
                </div>
                <center>
                    <table>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <tr>
                          <td><button name="AC" onClick={allclear} className="ButtonGray"> AC</button></td>
                          <td><button name="+/-" onClick={postoneg} className="ButtonGray">&#x207a;&#x2044;&#x208b;</button></td>
                          <td><button name="%" onClick={percentage} className="ButtonGray">%</button></td>
                          <td><button name="/" onClick={handelClick} className="ButtonOrange" >/</button></td>
                        </tr>

                        <tr>
                          <td><button name="7" onClick={handelClick} className="ButtonNum">7</button></td>
                          <td><button name="8" onClick={handelClick} className="ButtonNum">8</button></td>
                          <td><button name="9" onClick={handelClick} className="ButtonNum">9</button></td>
                          <td><button name="*" onClick={handelClick} className="ButtonOrange" >&times;</button></td>
                        </tr>

                        <tr>
                          <td><button name="4" onClick={handelClick} className="ButtonNum">4</button></td>
                          <td><button name="5" onClick={handelClick} className="ButtonNum">5</button></td>
                          <td><button name="6" onClick={handelClick} className="ButtonNum">6</button></td>
                          <td><button name="-" onClick={handelClick} className="ButtonOrange" >-</button></td>
                        </tr>

                        <tr>
                          <td><button name="1" onClick={handelClick} className="ButtonNum">1</button></td>
                          <td><button name="2" onClick={handelClick} className="ButtonNum">2</button></td>
                          <td><button name="3" onClick={handelClick} className="ButtonNum">3</button></td>
                          <td><button name="+" onClick={handelClick} className="ButtonOrange" >+</button></td>
                        </tr>

                        <tr>
                          <td colSpan="2"><button onClick={handelClick} name="0" className="Button0">0</button></td>
                          <td><button onClick={handelClick} name="." className="ButtonNum">.</button></td>
                          <td><button className="ButtonOrange" onClick={calculate}>=</button></td>
                        </tr>
                    </table> 
                    </center>
                    </div>
                  
                    </div>
                   
                   
        </div>
       
    </>
    
  );
}

export default App;
