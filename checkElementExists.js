/* https://stackoverflow.com/a/53269990/4241495 */
/* wait until an element exist on the page before running a function */
/* ToDo - make smaller, simpler */
const checkElement = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector); 
};

/* To use: */


checkElement('.myElement').then((selector) => {
  console.log(selector);
});