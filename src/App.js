import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!ops.includes(value)) setResult(eval(calc + value).toString());
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className="w-full h-16 max-w-[33.333%] p-3 border hover:bg-[#ffffff10] "
          onClick={() => updateCalc(i + "")}
          key={i}
        >
          {i}
        </button>
      );
    }

    return digits;
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const clearAll = () => {
    setResult("");
    setCalc("");
  };
  return (
    <div className="app w-full grid place-items-center min-h-[100vh] bg-slate-100">
      <div className="flex flex-col bg-white h-[50vh] w-full   max-w-lg rounded-lg shadow-xl border">
        <div className="text-right bg-[#131a26] rounded-t-lg text-white h-16 p-4 font-sans">
          {calc || "0"}
        </div>
        <div className="flex bg-[#d81e5b] h-16 align-center justify-between font-bold">
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={() => updateCalc("/")}
          >
            /
          </button>
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={() => updateCalc("*")}
          >
            *
          </button>
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={() => updateCalc("-")}
          >
            -
          </button>
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={() => updateCalc("+")}
          >
            +
          </button>
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={deleteLast}
          >
            del
          </button>
          <button
            className="border-none text-white text-xl outline-none cursor-pointer transition-all w-full hover:bg-[#ffffff10]"
            onClick={clearAll}
          >
            clear
          </button>
        </div>

        <div className="flex flex-wrap ">
          {createDigits()}
          <button
            className="w-full h-16 max-w-[33.333%] p-3 border hover:bg-[#ffffff10]"
            onClick={() => updateCalc("0")}
          >
            0
          </button>
          <button
            className="w-full h-16 max-w-[33.333%] p-3 border hover:bg-[#ffffff10]"
            onClick={() => updateCalc(".")}
          >
            .
          </button>
          <button
            className="w-full h-16 max-w-[33.333%] p-3 border hover:bg-[#ffffff10] "
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
