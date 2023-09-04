import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectd = ({ Component }) => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("token");

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protectd;
