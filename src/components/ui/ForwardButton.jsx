import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretRight } from "phosphor-react";

const ForwardButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(1)}>
      <CaretRight size={32} />
    </button>
  );
};

export default ForwardButton;
