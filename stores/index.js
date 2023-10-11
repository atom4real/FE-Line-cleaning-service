// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    profilePicture: '', // Store the user's profile picture URL
    userName: '',       // Store the user's name
    userId: '',         // Store the user's LINE user ID
    statusMessage: '',  // Store the user's status message
  }),
  actions: {
    // Update user data after login
    updateUserData(profilePicture, userName, userId, statusMessage) {
      this.profilePicture = profilePicture;
      this.userName = userName;
      this.statusMessage = statusMessage
      this.userId = userId;
    },
    // Clear user data when the user logs out
    clearUserData() {
      this.profilePicture = '';
      this.userName = '';
      this.userId = '';
      this.statusMessage = '';
    },
  },
});
