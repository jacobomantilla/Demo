import React, {Component} from 'react';
import {DayPilot, DayPilotMonth} from "@daypilot/daypilot-lite-react";
//import "./MonthStyles.css";
//import "./icons/style.css";

class Schedule extends Component {

  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();

    this.state = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 25,
      onBeforeEventRender: args => {
        args.data.borderColor = "darker";
        if (args.data.backColor) {
          args.data.barColor = DayPilot.ColorUtil.darker(args.data.backColor, -1);
        }
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: args => {
              const e = args.source;
              this.calendar.events.remove(e);
            }
          },
          {
            text: "-"
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#3d85c6",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#6aa84f",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#ecb823",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#d5663e",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Auto",
            color: null,
            onClick: args => this.updateColor(args.source, args.item.color)
          },

        ]
      }),
      onTimeRangeSelected: async args => {
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");

        this.calendar.clearSelection();
        if (!modal.result) {
          return;
        }
        this.calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2022-11-01",
      events: [
        {
          id: 1,
          text: "Gardening Day!",
          start: "2022-11-08",
          end: "2022-11-09",
          backColor: "#d5663e",
        },
        {
          id: 2,
          text: "Making Your Own Paper!",
          start: "2022-11-14",
          end: "2022-11-15",
          backColor: "#ecb823",
        },
        {
          id: 3,
          text: "Community Day",
          start: "2022-11-11",
          end: "2022-11-12",
          backColor: "#6aa84f",
        },
        {
          id: 4,
          text: "Petting Zoo",
          start: "2022-11-18",
          end: "2022-11-19",
          backColor: "#3d85c6",
        },
        {
          id: 5,
          text: "Thanksgiving",
          start: "2022-11-24",
          end: "2022-11-25"
        },
      ]
    });

  }

  updateColor(e, color) {
    e.data.backColor = color;
    this.calendar.events.update(e);
  }


  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    return (
      <div>
        <DayPilotMonth
          {...this.state}
          ref={this.calendarRef}
        />
      </div>
    );
  }
}

export default Schedule;