<script>
import "./assets/style.css";

export default {
  name: "App",
  // If want local component registration
  components: {},
  data() {
    return {
      dataFeature: {
        head: "KENAPA SIH?",
        title: "Kenapa Kami Memberikan Insight Apapun?",
        deskripsi:
          "Di sini kita akan klarifikasi mengapa kita akan memberikan insight apapun di tool ini kepada kamu. " +
          "Pada dasarnya hal ini kami lakukan semata-mata ingin menyelamatkan planet bumi.",
      },
      text: "MSTSKP",
      user: {
        username: "",
        password: "",
      },
      dataReason: {
        head: "TERUS GIMANA?",
        title: "Terus Kenapa Harus Wajib Milih?",
      },
    };
  },
  methods: {
    login() {
      let login = document.querySelector("#login");
      let main = document.querySelector("#main");
      let animate = document.querySelector('[aria-label="animation"]');
      let sec = document.querySelector("section");
      // localStorage.setItem("data", JSON.stringify(this.user));
      localStorage.setItem("username", this.user.username);
      localStorage.setItem("pw", this.user.password);
      if (
        this.user.username === "username" &&
        this.user.password === "username123"
      ) {
        localStorage.setItem("role", "admin");
        let loaded = setInterval(() => {
          animate.classList.remove("hidden");
          sec.classList.add("overflow-hidden");
          login.classList.add("hidden");
          main.classList.add("hidden");
        }, 0);
        setTimeout(() => {
          clearInterval(loaded);
          animate.classList.add("hidden");
          sec.classList.remove("overflow-hidden");
          login.classList.add("hidden");
          main.classList.remove("hidden");
        }, 2000);
      } else {
        localStorage.setItem("role", "basic");
        animate.classList.add("hidden");
        sec.classList.add("overflow-hidden");
        login.classList.remove("hidden");
        main.classList.add("hidden");
      }
    },
  },
  mounted() {
    let login = document.querySelector("#login");
    let main = document.querySelector("#main");
    let animate = document.querySelector('[aria-label="animation"]');
    let sec = document.querySelector("section");
    let user = localStorage.getItem("username");
    let sandi = localStorage.getItem("pw");

    if (user === "username" && sandi === "username123") {
      localStorage.setItem("role", "admin");
      let loaded = setInterval(() => {
        animate.classList.remove("hidden");
        sec.classList.add("overflow-hidden");
        login.classList.add("hidden");
        main.classList.add("hidden");
      }, 0);
      setTimeout(() => {
        clearInterval(loaded);
        animate.classList.add("hidden");
        sec.classList.remove("overflow-hidden");
        login.classList.add("hidden");
        main.classList.remove("hidden");
      }, 2000);
    } else {
      localStorage.setItem("role", "basic");
      animate.classList.add("hidden");
      sec.classList.add("overflow-hidden");
      login.classList.remove("hidden");
      main.classList.add("hidden");
    }
  },
};
</script>

<template>
  <section class="scroll-smooth">
    <!-- animation -->
    <div
      class="hidden bg-gradient-to-r from-slate-50 to-slate-300"
      aria-label="animation"
    >
      <div
        class="flex flex-row items-center justify-center h-screen"
        id="loading"
      >
        <div
          class="w-32 h-32 transition-all duration-1000 delay-1000 rounded-full shadow-2xl bg-gradient-to-r from-slate-50 to-slate-400 animate-ping"
        ></div>
      </div>
    </div>
    <!-- login form local stroage -->
    <div id="login" class="bg-gradient-to-r from-slate-50 to-slate-300">
      <div class="flex items-center justify-center h-screen">
        <form
          class="max-w-xs p-10 shadow-xl bg-gradient-to-r from-slate-50 to-slate-300 rounded-xl"
          id="form"
        >
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
              placeholder="Username"
            />
            <!-- end -->
            <!-- name -->
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 font-header"
            >
              Password
            </label>
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
      </div>
    </div>
    <!-- web display -->
    <div class="relative hidden" id="main">
      <!-- main section -->
      <!-- footer section & bg -->
      <bgTwo></bgTwo>
      <div
        class="lg:pt-32 absolute w-full h-[719px] lg:top-[3155px] top-[4400px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectanglefour.svg')]"
      >
        <!-- wrapper alternatives -->
        <alternative></alternative>
        <!-- end wrapper alternatives -->
        <!-- expresion wrapper -->
        <expresion></expresion>
        <!-- end expresion -->
        <!-- footer -->
        <footerVue :title="text"></footerVue>
        <!-- end footer -->
      </div>
      <!-- feature  -->
      <!-- 2380px -->
      <div
        class="absolute w-full lg:h-[130rem] h-[210rem] left-0 top-[1067px] bg-mainPrimary pt-[30rem]"
      >
        <!-- wrapper feature -->
        <featureVue
          :headFeature="dataFeature.head"
          :titleFeature="dataFeature.title"
          :deskripsiFeature="dataFeature.deskripsi"
        >
        </featureVue>
        <!-- end wrapper feature-->
        <!-- wrapper reasons -->
        <reason :headReason="dataReason.head" :titleReason="dataReason.title">
        </reason>
        <!-- end wrapper reasons -->
      </div>
      <home></home>
      <navVue :title="text"></navVue>
    </div>
  </section>
</template>
