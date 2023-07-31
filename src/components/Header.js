import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted segment" style={{ marginBottom: 0 }}>
      <div className="ui inverted secondary pointing menu">
        <div className="ui container">
          <Link to="/" className="header item">
            FakeShop
          </Link>
          <div className="right menu">
            {/* Add additional menu items or actions here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
