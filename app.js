// select all the elements in the class box from the DOM and store them in an array 
// select boxes using querySelectorAll  use the spread operator to convert the nodelist to an array
const boxes= [... document.querySelectorAll('.box')]
// using the for each method passing an argument box and add an event listener which woul create the hover effect when the mouse moves over the box
boxes.forEach((box) => {
 box.addEventListener('mousemove', (e) => {
    // add a function to define the event of the cursor
    //  create a variable called cursorposition
    const cursorPosition = e.clientX - box.getBoundingClientRect().left 
    // the above line ofcode helps us calculate the position of the cursor,
    // e.clientX property rep the horizontal mouse pointer relative to the left edge of the view port
    // the left property represents the distance of the left edge of the viewport to the left edge of the element

    // define the width of the box
    const width = box.getBoundingClientRect().width
    // once you go to the browswer and inspect the webpage on the console tab; if you hover on the box it would show you the position of the mouse and width of the box
   //  console.log(cursorPosition, width)
    // next we create an if statement to check if the mouse cursor is on the left or right
    if(cursorPosition > width / 2) {
      !box.classList.contains('leftEffect') && box.classList.add('rightEffect') 
     } else {
      !box.classList.contains('rightEffect') && box.classList.add('leftEffect') 
     }
     // if the position of the cursor is greater than the half of the box width it means that the cursor is on the right part ofthe box
      // else if it is false it means the cursor is on the left part, if its true we would expand the background from the bottom
      // add a class for right effect to the box and make sure that the box doesnt include this class name we can do this using :
   })
   // to remove the background when the mouse leaves the box
    box.addEventListener('mouseleave', () => {
      box.classList.remove("leftEffect")
      box.classList.remove("rightEffect")
    })
})
