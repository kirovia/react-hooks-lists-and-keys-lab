import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const LinksArray = () => links.map(item => <a key={item} href={'#' + item}>{item}</a>)
  return (
    <nav>
      <LinksArray/>
    </nav>
  )
}

export default NavBar;
