import React, { useCallback, useMemo, useState } from "react";
import One from "../Components/TEST/One";

const Test2 = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(10);

  // const changingCountState = (e) => {
  //   e.preventDefault();
  //   setCount(e.target.value);
  //   // updateTitle();
  // };

  const reset = (e) => {
    e.preventDefault();
    // setCount(0);
    setTitle(count * 10);
  };

  const updateTitle = useMemo(() => {
    const returnValue = 10 * count;
    return returnValue;
  }, [title]);

  // const updateTitle = () => {
  //   return setTitle((prev) => prev + 1200);
  // };

  // console.log("title", updateTitle);

  const updateFN = useCallback(
    (data) => {
      console.log(data);
    },
    [title]
  );

  return (
    <div className="row d-flex justify-content-center p-2">
      <form>
        <input
          onChange={(e) => setCount(e.target.value)}
          placeholder="Enter count..."
          className=" mt-4 p-4 col-3"
          value={count}
        />

        <button onClick={(e) => reset(e)} variant="outlined" className="primary mt-4 p-4 col-3">
          Calculate
        </button>
      </form>
      <div className="mt-4">
        <One title={updateTitle} updateFN={updateFN} />
      </div>
    </div>
  );
};

export default Test2;
