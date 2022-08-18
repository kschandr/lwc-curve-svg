import { LightningElement, api} from "lwc";

export default class Connector extends LightningElement {

  _lines;

  @api 
  set lines(data) {
    console.debug("at connector: " + data);
    this._lines = data;
  }

  get lines() {
    return this._lines;
  }


}
