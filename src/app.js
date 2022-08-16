import { LightningElement } from "lwc";

export default class App extends LightningElement {
  inputXY = {};



  inputHandler(event) {
    console.debug(event.detail + " \n" + event.pageY +
     " \n" + event.target.parentElement.id);
     inputXY = { x: event.pageX, y: event.pageY};

  }

  outputHandler(event) {
    
  }
}
