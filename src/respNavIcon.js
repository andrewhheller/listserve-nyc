const respNavIcon = () => {

  const x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  }

  else {
    x.className = "topnav";
  }

}

export default respNavIcon;
