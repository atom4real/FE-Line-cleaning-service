<template>
    <div>
      <div id="calendar"></div>
    </div>
  </template>
  
  <script>
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import BookingService from "../services/BookingService";
  
  export default {
    data() {
      return {
        events: {}, // Events from the backend
      };
    },
    mounted() {
      this.fetchEventsFromBackend();
    },
    methods: {
      async initCalendar() {
        const calendarEl = document.getElementById("calendar");
        const calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, timeGridPlugin],
          initialView: "timeGridWeek",
          eventColor: "#378006",
          eventDidMount: function (info) {
            // console.log(info.event);
            // {description: "Lecture", department: "BioChemistry"}
          },
        });
  
        // Merge events from the backend and static events
        const allEvents = [
          ...Object.values(this.events)
        ].map(event => ({
          title: event.title,
          start: event.start,
          end: event.end,
          phone_number: event.phone_number,
          location: event.location,
          id: event.id,
        }));
  
        console.log(allEvents);
        calendar.addEventSource(allEvents);
        calendar.render();
      },
      async fetchEventsFromBackend() {
        try {
          // Fetch events from the backend using your BookingService
          const response = await BookingService.getBooking();
    
          if (response.status === 200) {
            const eventData = await response.data;
            this.events = eventData.data; // Set the fetched events
            this.initCalendar();
            console.log(this.events);
            return this.events;
          } else {
            console.error("Failed to fetch events:", response.statusText);
            return [];
          }
        } catch (error) {
          console.error("Error fetching events:", error);
          return [];
        }
      },
    },
  };
  </script>
  