import React from "react";
import "./styles.scss";

const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      <div className="wrap">
        {headline && <h2>{headline}</h2>}

        {children && children}
      </div>
    </div>
  );
};

export default AuthWrapper;
