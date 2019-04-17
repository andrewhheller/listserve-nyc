// form input field focus
const formFocus = fields => {

  fields.forEach(field => {

    const _field = document.getElementById(field)
  
    _field.addEventListener('focus', 
      () => _field.style.border = "3px solid blue"
    )
    
    _field.addEventListener('blur', 
      () => _field.style.border = ""
    )
  });

}

const klingonCloak = (a, b) => {
  return a + "@" + b;
}

const birdOfPrey = klingonCloak("info", "listservenyc.com");


export {
  formFocus,
  birdOfPrey
}
