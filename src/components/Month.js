import React, {Component} from 'react';
import {DayPilot, DayPilotMonth} from "@daypilot/daypilot-lite-react";
//import "./MonthStyles.css";

class Month extends Component {

  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();

    this.state = {
      startDate: DayPilot.Date.today(),
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 20
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      events: [
        {
          id: 1,
          text: "Gardening Day!",
          start: "2022-11-08",
          end: "2022-11-09"
        },
        {
          id: 2,
          text: "Making Your Own Paper",
          start: "2022-11-09",
          end: "2022-11-10"
        },
        {
          id: 3,
          text: "Community Day",
          start: "2022-11-11",
          end: "2022-11-12"
        },
        {
          id: 4,
          text: "Petting Zoo",
          start: "2022-11-18",
          end: "2022-11-19"
        },
        {
          id: 5,
          text: "Event 5",
          start: "2022-11-15",
          end: "2022-11-16"
        },
      ]
    });

  }


  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <DayPilotMonth
          {...config}
          ref={this.calendarRef}
        />
      </div>
    );
  }
}

export default Month;