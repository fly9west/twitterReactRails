import { EventEmitter } from 'events';
const CHANGE_EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(){
    this.removeListener(CHANGE_EVENT, callback);
  }
}
