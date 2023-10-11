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
        <input
          type="tel"
          v-model="phoneNumber"
          id="phoneNumber"
          required
          maxlength="10"
        />
      </div>
      <div class="form-group">
        <label for="serviceType">Service Type:</label>
        <select v-model="selectedServiceType" id="serviceType">
          <option value="standard">Standard Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="carpet">Carpet Cleaning</option>
          <!-- Add more service options as needed -->
        </select>
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
      <div class="form-group">
        <label for="additionalNotes">Additional Notes:</label>
        <textarea v-model="additionalNotes" id="additionalNotes"></textarea>
      </div>
      <button type="submit">Book Now</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      selectedServiceType: "standard",
      selectedDate: "",
      selectedTime: "",
      location: "",
      additionalNotes: ""
    };
  },
  methods: {
    submitBooking() {
      const bookingData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        selectedServiceType: this.selectedServiceType,
        selectedDate: this.selectedDate,
        selectedTime: this.selectedTime,
        location: this.location,
        additionalNotes: this.additionalNotes
      };

      // Print the booking data as JSON
      console.log(JSON.stringify(bookingData, null, 2));
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
