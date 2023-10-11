<!-- src/views/ProfilePage.vue -->
<template>
    <div class="profile">
      <h1 class="profile-title">LINE Profile</h1>
      <div class="profile-content">
        <img :src="userStore.profilePicture" alt="Profile Picture" class="profile-picture" />
        <div class="profile-details">
          <p class="profile-name">Name: {{ userStore.userName }}</p>
          <p class="profile-name">Status Message: {{ userStore.statusMessage }}</p>
          <p class="profile-token">TokenID: {{ userStore.userId }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '../stores/index';
  import { liff } from "@line/liff";
  
  export default {
    setup() {
      const userStore = useUserStore();
  
      // Ensure the user is logged in using your authentication logic here
      if (!liff.isLoggedIn()) {
        // Redirect to the login page or handle it accordingly
        this.$router.push('/');
      }
  
      // Fetch the LINE profile if the user is logged in
      const loadUserProfile = async () => {
        try {
          const profile = await liff.getProfile();
          userStore.updateUserData(profile.pictureUrl, profile.displayName, profile.userId, profile.statusMessage);
        } catch (error) {
          console.error(error);
        }
      };
  
      // Load the user profile when the component is created
      loadUserProfile();
  
      return {
        userStore,
      };
    },
  };
  </script>
  
  <style scoped>
  .profile {
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
  }
  
  .profile-title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .profile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .profile-details {
    text-align: left;
  }
  
  .profile-name {
    font-size: 18px;
    color: #333;
  }
  
  .profile-token {
    font-size: 16px;
    color: #666;
  }
  </style>
  