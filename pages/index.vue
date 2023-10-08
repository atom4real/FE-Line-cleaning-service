<template>
    <div>
      <h1>LINE Login</h1>
      <button @click="loginWithLine">Login with LINE</button>
    </div>
  </template>
  
  <script>
  // Import the necessary function from the LINE LIFF SDK
  import { liff } from '@line/liff';
  
  export default {
    methods: {
      async loginWithLine() {
        try {
          // Initialize the LINE LIFF SDK
          await liff.init({ liffId: '2001053759-qWnzRxdw' });
  
          // Check if the user is already logged in
          if (!liff.isLoggedIn()) {
            // If not logged in, initiate the LINE login process
            await liff.login();
          } else {
            // If already logged in, redirect to the profile page
            this.$router.push('/profile');
          }
        } catch (error) {
          console.error('LINE LIFF initialization/login error:', error);
        }
      },
    },
  };
  </script>
  