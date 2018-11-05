
const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  const allowDrop = (event) => {
    event.preventDefault();
    var classes =  event.currentTarget.getAttribute("class");
    if (classes.indexOf("disabled")>=0) {
        
    }
    else {
        event.currentTarget.style.background = '#7f8082';    
        // TODO Remove From List
    }
  }
  
  const drop = (event) => {

    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log(data);
    
    //const element = document.querySelector(`#${data}`);
    event.currentTarget.style.background = 'white'
    try {
      event.target.appendChild(element);
    } catch (error) {
      console.warn("you can't move the item to the same place")
    }
  }