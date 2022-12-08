import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/output.css';
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'Some title',
      },
    ],
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <div className="flex w-full h-screen">
          <div className="w-40 h-full bg-green-500">sidebar</div>
          <div className="w-1/5 h-full bg-red-500 grid grid-cols-1">
            message overview
          </div>
          <div className="w-3/4 h-full">
            <div className="App">
              <DnDCalendar
              local = {'fr'}
                defaultDate={moment().toDate()}
                defaultView="month"
                events={this.state.events}
                localizer={localizer}
                onEventDrop={this.onEventDrop}
                onEventResize={this.onEventResize}
                resizable
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
