<template>
  <div class="booking-form">
    <h1>Book Cleaning Service</h1>
    <form @submit.prevent="submitBooking">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required maxlength="50" />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" v-model="phoneNumber" id="phoneNumber" required maxlength="10" />
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" v-model="selectedDate" id="date" required />
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" v-model="selectedTime" id="time" required />
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" v-model="location" id="location" maxlength="100" />
      </div>
      <button type="submit">Book Now</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/index';
import BookingService from "../services/BookingService"
export default {
  data() {
    return {
      records: [],
      name: "",
      phoneNumber: "",
      selectedDate: "",
      selectedTime: "",
      location: "",
    };
  },
  computed: {
    userStore() {
      return useUserStore(); // Create a reference to the user store
    },
  },
  methods: {
    fetchData() {
      BookingService.getBooking().then(response => {
        this.records = response.data
      })
    },
    async submitBooking() {
      const bookingData = {
        name: this.name,
        line_user_id: this.userStore.userId,
        phone_number: this.phoneNumber,
        bookDate: this.selectedDate,
        bookTime: this.selectedTime,
        location: this.location,

      };
      console.log(bookingData);
      try {
        // Send the booking data to the backend API using Axios
        const response = await BookingService.addBooking(bookingData);

        // Print the response from the backend
        console.log("Booking response:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Server responded with an error:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
      }

    }
  }
};
</script>

<style scoped>
.booking-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

select,
input[type="date"],
input[type="time"],
textarea,
input[type="text"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #00c300;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #008a00;
}
</style>
