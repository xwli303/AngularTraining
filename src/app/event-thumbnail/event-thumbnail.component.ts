
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare let toastr

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any;

  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    return {green: isEarlyStart, bold: isEarlyStart}
  }
  //   // can use if statements too
  // }

  getStartTimeStyle():any{
    if(this.event && this.event.time === '8:00 am')
      return {color: '#0036300', 'font-weight':'bold'}
    return {}
  }
  constructor() { }

  ngOnInit(): void {
  }

  handleThumbnailClick(eventName){
    toastr.success(eventName)
  }

}
