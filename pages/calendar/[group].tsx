/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../../styles/output.css';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b><br></br>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    // fetch events here
    fetch('http://localhost:3000/api/events/')
      .then((response) => response.json())
      .then((events) => {
        this.setState({
          events,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <div className="flex w-full h-full">
          <div className="w-40 h-full bg-green-500">sidebar</div>
          <div className="w-1/5 h-full bg-red-500 grid grid-cols-1">
            message overview
          </div>
          <div className="w-3/4 h-full bg-gray-200">
            <div className="rounded-lg bg-white shadow-2xl m-2">
              <FullCalendar
                plugins={[timeGridPlugin]}
                nowIndicator={true}
                initialView="timeGridWeek"
                events={this.state.events}
                eventContent={renderEventContent}

              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
/** {
          title: 'Titleeee 1', start: '2022-12-08T10:30:00', end: '2022-12-08T11:30:00', color: 'red',
        }, */
