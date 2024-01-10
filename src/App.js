// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./pages/About";

function App() {

    const [mode,changeMode] = useState(true);
    const [data,updateData] = useState("")
    document.body.style.backgroundColor = mode ? "white" : "black"

    const [words,updateWords] = useState(0)
    const [characters,updateCharacters] = useState(0)




    const updateMode = () =>{
      changeMode(!mode)
      // console.log(mode);
    }

    const upperCase = () =>{
      updateData(data.toUpperCase())
    }
    const lowerCase = () =>{
      updateData(data.toLowerCase())
      // console.log("click Lowercase");
    }
    const clearData = (e) =>{
      updateData("")
      updateWords(0)
      updateCharacters(0)
    }
    const copy = () =>{
      navigator.clipboard.writeText(data)
      // console.log("click Copy");
    }
    const capitalize = () =>{
      updateData(data.slice(0,1).toUpperCase() + data.slice(1))

      // updateData()
    }

    const handleChange =  (e) =>{
        updateData(e.target.value)
        updateCharacters(data.length+1)
        let nWords = data.split(" ")
        updateWords(nWords.length)
    }

  return (
    <>

      {/* <Router> */}
      <Navbar mode={mode} toggle={updateMode}></Navbar>
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
          <div>
        <div className="container">
        <h1 className={`mt-2 text-${mode ? "dark" : "light"}`}>Enter text here :</h1>

        <div className="form">
          <textarea
            className={`form-control bg-${mode ? "light" : "dark"} fs-5  text-${mode ? "dark" : "light"}`}
            id="floatingTextarea" rows="8" value={data} onChange={handleChange}></textarea>
        </div>
        <div className="d-flex flex-wrap my-1">
          <button type="button" class="btn btn-primary me-2 my-2" onClick={upperCase}>Change to Uppercase</button>
          <button type="button" class="btn btn-primary mx-2 my-2" onClick={lowerCase}>Change to Lowercase</button>
          <button type="button" class="btn btn-primary mx-2 my-2" onClick={clearData}>Clear</button>
          <button type="button" class="btn btn-primary mx-2 my-2" onClick={copy}>Copy</button>
          <button type="button" class="btn btn-primary mx-2 my-2" onClick={capitalize}>Capitalize</button>
        </div>
 
        <h2 className={`my-2 text-${mode ? "dark" : "light"} `}>Your text summary :</h2>

        <h6 className={`text-${mode ? "dark" : "light"}`}>{words} Words, {characters} Characters</h6>
        <h6 className={`text-${mode ? "dark" : "light"}`}>{words != 0 && `${words * 0.008} minute to read`  } </h6>

        <h2 className={`mt-4 text-${mode ? "dark" : "light"}`}>Preview :-</h2>

        <p className={`my-1 w-100 fs-5 text-${mode ? "dark" : "light"}`} style={{lineBreak:"anywhere"}}>{data}</p>

        </div>
      </div>
      {/* }></Route> */}
      
          {/* <Route path="/about" element={<About/>}></Route> */}
        {/* </Routes>
      </Router> */}
      
    </>
  );
}

export default App;
