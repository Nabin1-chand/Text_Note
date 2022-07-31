import React, { useState } from "react";


const Navabar = (props) => {

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
      // mode === "light" ? setMode("dark")&: setMode("light");
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#999999';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
  
      }
    }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode}` } >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text ${mode==='light'? 'dark' :'light'}`} style={{color:"blue"}}>
              <input
                className="form-check-input"
                onClick={toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
