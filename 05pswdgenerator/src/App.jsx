import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()[]{}=+-_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length );

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  useEffect(() => {
    GeneratePassword();
  }, [length, numAllowed, charAllowed, GeneratePassword]);
  // useRef hook
  const copyToClipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    alert(`Copied: ${password}`);
  }, [password]);
  const passref = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-4 m-8 bg-gray-700 text-orange-500">
        <h1 className="text-white">password Generator</h1>
        <div className="flex shadow-lg rounded overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-2 px-1"
            readOnly
            ref={passref}
          />
          <button
            onClick={copyToClipboard}

            className="rounded bg-blue-500 text-white shrink-0 px-2 py-3"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
