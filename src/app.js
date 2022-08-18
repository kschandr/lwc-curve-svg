import { LightningElement, track } from "lwc";

export default class App extends LightningElement {

  @track lines =[];
  startLocation;

  inputHandler(event) {
    // console.debug(event.pageX + ", " + event.pageY
    // + "\n" + event.offsetX + ", " + event.offsetY);
    // console.debug(event.clientX + " " + event.clientY);

    const ele = event.target;
    const bounds = ele.getBoundingClientRect();
    this.startLocation = {x1: bounds.x, y1: bounds.y};
  }

  outputHandler(event) {
    //  console.debug(event.pageX + ", " + event.pageY
    // + "\n" + event.offsetX + ", " + event.offsetY)
    const ele = event.target;
    const bounds = ele.getBoundingClientRect();
    this.lines=[...this.lines, {...this.startLocation, x2:bounds.x, y2:bounds.y}];
    console.debug(this.lines);
  }

  alertFocusOut(event) {
    alert("oout of focus");
  }
}
