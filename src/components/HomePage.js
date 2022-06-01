import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomePage() {
  return (
    <div>
      <h1 className="home-name">MyFitnessPal</h1>

      <LinkContainer to="/signup" exact>
        <button className="btn-34">
          <span>Sign up</span>
        </button>
      </LinkContainer>
    </div>
  );
}

export default HomePage;
