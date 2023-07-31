import React from "react";

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <p>All rights reserved &copy; {new Date().getFullYear()} FakeShop</p>
      </div>
    </div>
  );
};

export default Footer;
