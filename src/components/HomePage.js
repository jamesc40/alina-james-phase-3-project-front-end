import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomePage() {
  return (
    <div>
      <h1 className="home-name">MyFitnessPal</h1>

      <LinkContainer to="/signup" exact>
        {/* <button className="button-78"> */}
        {/* <button className="button-36" role="button">
          Button 36
        </button> */}

        {/* <span>Sign up</span>
        </button> */}
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Sign up</span>
        </button>
      </LinkContainer>
    </div>
  );
}

export default HomePage;
