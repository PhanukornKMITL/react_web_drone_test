import React, { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Calendar.css";
import CustomToolbar from "./Calendar/CustomToolbar.js";
import { Grid, Box, Typography} from '@mui/material';

const localizer = momentLocalizer(moment);


function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event); // เก็บเหตุการณ์ที่เลือกใน selectedEvent state
    console.log(event);
  };

  moment.locale("th");
  const messages = {
    showMore: (total) => `ค้นพบ ${total} รายการ`,
  };

  const events = [
    {
      title: "My event",
      start: new Date(),
      end: new Date(),
      extendedProps: {
        location: "Room A",
        note: "Please bring your laptop",
        info: "บอกว่าอย่าขอหมอลำ"
      },
    },
    {
      title: "My event1",
      start: new Date(),
      end: new Date(),
      extendedProps: {
        location: "Room A",
        note: "Please bring your laptop",
        info: "บอกว่าอย่าขอหมอลำ"
      },
    },
    {
      title: "My event2",
      start: new Date(),
      end: new Date(),
      extendedProps: {
        location: "Room B",
        note: "Please bring your laptop2",
        info: "บอกว่าอย่าขอหมอลำ2"
      },
    },
  ];
  return (
    <div className="wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            components={{
              toolbar: CustomToolbar,
            }}
            style={{ height: "100%", width: "100%"}}
            onSelectEvent={handleSelectEvent}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ height: '100%' }}>
            <div className="date-info">
              {selectedEvent ? (
                <>
                  <Typography variant="h6">{selectedEvent.title}</Typography>
                  <Typography>{selectedEvent.desc}</Typography>
                  <Typography>{selectedEvent.start.toString()}</Typography>
                  <Typography>{selectedEvent.extendedProps.info}</Typography> {/* แสดงข้อมูล info */}
                </>
              ) : (
                <Typography variant="h6">Please select an event</Typography>
              )}
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
  
}
export default CalendarPage;
