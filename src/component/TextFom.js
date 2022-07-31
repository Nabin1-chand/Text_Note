import React from "react";
import { useState } from "react";

const TextFom = () => {
  const [data, setData] = useState("");
  const HandleClick = () => {
    // console.log("Change data to upper Case")
    let newtext = data.toUpperCase();
    setData(newtext);
  };
  const HandleClicked = (e) => {
    let newtext = data.toLowerCase();
    setData(newtext);
  };
  const HandleCopy = () => {
    navigator.clipboard.writeText(data);
  };
  const HandleRemove = () => {
    console.log("remove");
    let newtext = data.replace(/\s+/g, " ").trim();
    setData(newtext);
  };
  return (
    <>
      <div className="container my-5">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Enter Some Text"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={HandleClick}
        >
          Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2"
          onClick={HandleClicked}
        >
          Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2"
          onClick={HandleRemove}
        >
          Remove Space
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2"
          onClick={HandleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mx-2"
          onClick={() => setData("")}
        >
          Clear
        </button>
      </div>

      <div className="container my-3" >
        <h4>Your Text</h4>
        <p>
          {data.split(" ").length} word {data.length} character
        </p>
        <p>{0.008 * data.split(" ").length} take minutes to read</p>
        <hr />
        <h4> Preview</h4>
        <p>{data}</p>
      </div>
    </>
  );
};

export default TextFom;
