import React from "react";

const Square = (props) => {
  const handleClick = () => {
    props.handleGamePlay(props.index);
  };

  return (
    <>
      <div onClick={handleClick} className="square">
        {props.square}
      </div>
    </>
  );
};
export default Square;
