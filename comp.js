// Button class
class Button {
    constructor(element) {
      this.element = element;
      this.text = element.querySelector('.btn-text');
      this.disabled = false;
  
      // Add event listeners
      this.element.addEventListener('click', () => {
        if (!this.disabled) {
          // Handle button click event
          console.log('Button clicked!');
        }
      });
    }
  
    // Method to disable the button
    disable() {
      this.disabled = true;
      this.element.classList.add('btn-disabled');
      this.text.textContent = 'Disabled';
      console.log("The button has been disabled");
    }
  }
  
  // Create a new button instance and append it to the page
  const newBtn = document.createElement("button");
  newBtn.className = "btn";
  newBtn.innerHTML = "<span class='btn-text'>New Button</span>";
  document.body.appendChild(newBtn);
  const myButton = new Button(newBtn);
  myButton.disable();