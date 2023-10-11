<template>
  <div class="navbar">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
    </nav>
    <nuxt-link v-if="userStore.userId" to="/profile" class="line-profile">
      <img :src="userStore.profilePicture" alt="LINE Profile" class="profile-picture" />
      <span class="user-name">{{ userStore.userName }}</span>
    </nuxt-link>
  </div>
  <div>
    <slot />
  </div>
</template>

<script>
import { useUserStore } from '../stores/index';

export default {
  computed: {
    userStore() {
      return useUserStore();
    },
  },
};
</script>

<style scoped>
body {
  display: block !important;
  margin: 0px !important;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #00c300 0%, #0099cc 100%);
  color: white;
  padding: 15px 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #f0f0f0;
}

.line-profile {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}
</style>
