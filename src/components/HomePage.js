import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-name">MyFitnessPal</h1>

      <LinkContainer to="/signup" exact>
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
