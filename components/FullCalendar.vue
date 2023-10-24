<template>
  <div>
    <div id="calendar"></div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

export default {
  mounted() {
    this.$nextTick(() => {
      this.initCalendar();
    });
  },
  methods: {
    initCalendar() {
      const calendarEl = document.getElementById("calendar");
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        initialView: "timeGridWeek",
        events: [
          {
            title: "Event 1",
            start: "2023-10-24T08:00:00",
            end: "2023-10-24T10:00:00",
            description: "Lecture",
            name: "asdasd",
          },
          {
            title: "Event 2",
            start: "2023-10-25T14:30:00",
            end: "2023-10-25T16:00:00",
          },
          // Add more events with start and end times
          {
            title: "Event 3",
            start: "2023-10-26T10:00:00",
            end: "2023-10-26T19:30:00",
          },
          {
            title: "Event 4",
            start: "2023-10-26",
          },
        ],
        eventColor: "#378006",
        eventDidMount: function (info) {
          console.log(info.event);
          // {description: "Lecture", department: "BioChemistry"}
        },
      });
      calendar.render();
    },
  },
};
</script>
