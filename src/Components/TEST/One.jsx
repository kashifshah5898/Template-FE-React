import React, { useEffect } from "react";

const One = (props) => {
  const { title, updateFN } = props;
  console.log("Component ONE is render ");
  // useEffect(() => {
  //   console.log("Component ONE is render ");
  // }, []);
  const updateFN1 = (data) => {
    updateFN(data);
  };

  return (
    <div>
      One Props : {title}
      <input onChange={(e) => updateFN1(e.target.value)} />
    </div>
  );
};

export default React.memo(One);
// export default One;
