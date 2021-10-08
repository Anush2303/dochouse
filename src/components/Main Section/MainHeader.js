import React, { useState, useEffect } from "react";

import "./MainHeader.css";
import { Jumbotron } from "reactstrap";

const MainHeader = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const timeout = setInterval(() => {
      setIsShown((prevState) => !prevState);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Jumbotron className="main_header">
        <h1 className="display-3 title">
          DOCHOUSE{" "}
          {isShown ? (
            <i class="fas fa-user-graduate"></i>
          ) : (
            <i class="fas fa-user"></i>
          )}
        </h1>
        <h3 className="lead subtitle">AB ENGINEERING HOGI ASAAN!</h3>

        <div>
          <img
            className="cover"
            src="http://4.bp.blogspot.com/-zJOGr6L6WXI/T5WktVyAIII/AAAAAAAAAAc/bi2MsS9jePI/s1600/head_gear_500_clr.gif"
            alt="img"
          />
        </div>
      </Jumbotron>
    </>
  );
};

export default MainHeader;
