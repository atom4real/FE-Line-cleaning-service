<template>
  <div>
    <button @click="loginWithLINE">Login with LINE</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeLIFF();
  },
  methods: {
    initializeLIFF() {
      if (process.client) {
        const liff = window.liff;
        liff
          .init({
            liffId: "2001053759-qWnzRxdw", // Replace with your LIFF app ID
          })
          .then(() => {
            // LIFF initialization is successful
            if (!liff.isLoggedIn()) {
              liff.login();
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    loginWithLINE() {
      if (process.client) {
        const liff = window.liff;
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      }
    },
  },
};
</script>
