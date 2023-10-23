<template>
  <div class="space-top">
    <div class="container">
      <h1>Hi! Welcome {{ userStore.userName }}</h1>
      <div v-if="!userStore.userId" class="line-login">
        <h1 class="line-login-title">LINE Login</h1>
        <button @click="loginWithLine" class="line-login-button">
          Login with LINE
        </button>
      </div>
      <nuxt-link
        v-if="userStore.userId"
        to="/bookingPage"
        class="line-login-button"
      >
        <span
          style="
            background-color: #00c300;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
          "
        >
          Book Cleaning Service
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { liff } from "@line/liff";
import { useUserStore } from "../stores/index"; // Import the user store

export default {
  data() {
    return {
      isLogin: true,
    };
  },
  computed: {
    userStore() {
      return useUserStore(); // Create a reference to the user store
    },
  },
  methods: {
    async loginWithLine() {
      try {
        // Initialize the LINE LIFF SDK
        await liff.init({ liffId: "2001053759-qWnzRxdw" });
        const newTab = window.open(
          "http://localhost:8000/auth/google",
          "_blank"
        );

        // Close the new tab after a specified time (e.g., 3 seconds)
        setTimeout(function () {
          newTab.close();
        }, 1000);
        // Check if the user is already logged in
        if (!liff.isLoggedIn()) {
          // If not logged in, initiate the LINE login process
          liff.login();
          this.isLogin = false;
        } else {
          // If already logged in, get user profile
          const profile = await liff.getProfile();

          // Store user data in the user store
          this.userStore.updateUserData(
            profile.pictureUrl,
            profile.displayName,
            profile.userId,
            profile.statusMessage
          );

          this.$router.push("/profile");
        }
      } catch (error) {
        console.error("LINE LIFF initialization/login error:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.space-top {
  margin-top: 4rem;
}

.line-login {
  text-align: center;
  padding: 20px;
}

.line-login-title {
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
}

.line-login-button {
  background-color: #00c300;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

.line-login-button:hover {
  background-color: #008a00;
}
</style>
