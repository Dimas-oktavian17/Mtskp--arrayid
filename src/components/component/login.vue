<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // let login = document.querySelector("#login");
      // let main = document.querySelector("#main");
      // localStorage.setItem("data", JSON.stringify(this.user));
      localStorage.setItem("username", this.user.username);
      localStorage.setItem("pw", this.user.password);
      if (this.user.username === "admin" && this.user.password === "admin") {
        localStorage.setItem("role", "admin");
        fo.classList.add("hidden");
        main.classList.remove("hidden");
      } else {
        localStorage.setItem("role", "basic");
        login.classList.remove("hidden");
        main.classList.add("hidden");
      }
    },
  },
  mounted() {
    let login = document.querySelector("#login");
    let main = document.querySelector("#main");
    let user = localStorage.getItem("username");
    let sandi = localStorage.getItem("pw");

    if (user === "admin" && sandi === "admin") {
      localStorage.setItem("role", "admin");
      login.classList.add("hidden");
      main.classList.remove("hidden");
    } else {
      localStorage.setItem("role", "basic");
      login.classList.remove("hidden");
      main.classList.add("hidden");
    }
  },
};
</script>
<template>
  <form class="space-y-6" id="form">
    <h1 class="text-xl font-medium text-gray-900 font-main">Login</h1>
    <div>
      <!-- result -->
      <label
        for="text"
        class="block mb-2 text-sm font-medium text-gray-900 font-header"
      >
        username</label
      >
      <input
        v-model="user.username"
        required
        type="text"
        name="username"
        class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
        placeholder="myLove"
      />

      <!-- end -->
      <!-- name -->
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 font-header"
      >
        Password</label
      >
      <input
        required
        v-model="user.password"
        type="password"
        name="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg capitalize focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
        placeholder="*****"
      />
    </div>

    <button
      type="submit"
      @click="login()"
      class="w-full text-white bg-homePrimary hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-homePrimary font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-500 mt-4"
    >
      Login
    </button>
  </form>
</template>
