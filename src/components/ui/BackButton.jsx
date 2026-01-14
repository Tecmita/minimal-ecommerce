import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <CaretLeft size={32} />
    </button>
  );
};

export default BackButton;
