<!-- src/views/ProfilePage.vue -->
<template>
    <div>
      <h1>LINE Profile</h1>
      <img :src="pictureUrl" alt="Profile Picture" />
      <p>Name: {{ displayName }}</p>
      <p>TokenID: {{ userId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pictureUrl: '',
        displayName: '',
        userId: '',
      };
    },
    created() {
      if (liff.isLoggedIn()) {
        this.loadUserProfile();
      } else {
        this.$router.push('/');
      }
    },
    methods: {
      async loadUserProfile() {
        try {
          const profile = await liff.getProfile();
          this.pictureUrl = profile.pictureUrl;
          this.displayName = profile.displayName;
          this.userId = profile.userId;
          console.log(profile);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  