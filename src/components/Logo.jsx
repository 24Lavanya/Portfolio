import React from "react";

const Logo = ({id}) => {
  return (
    <div id={id} className="logo-mark">
      <span class="bracket">{"<"}</span>
      <span class="letter">L</span>
      <span class="slash">/</span>
      <span class="bracket">{">"}</span>
    </div>
  );
};

export default Logo;
