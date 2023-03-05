<script>
import emailjs from "../../../node_modules/@emailjs/browser/es/index";

export default {
  name: "ContactUs",
  data() {
    return {
      myInput: "",
      name: "",
      email: "",
      msg: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_rgvnvgg",
          "template_vz0kpml",
          e.target,
          "Hv8LRxk1X5ZHFsgA7",
          {
            name: this.name,
            email: this.email,
            msg: this.msg,
          }
        );
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err; // rethrow
        }
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.msg = "";
    },
  },
};
</script>
<template>
  <form class="space-y-6" @submit.prevent="sendEmail">
    <h1 class="text-xl font-medium text-gray-900 font-main">
      Send message & answer
    </h1>
    <div>
      <!-- result -->

      <label
        for="text"
        class="block mb-2 text-sm font-medium text-gray-900 font-header"
      >
        Answer</label
      >
      <input
        v-model="myInput"
        type="text"
        class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
        placeholder="true or false?"
      />
      <input
        v-if="myInput === 'true'"
        value="Terimakasih sudah mempercayaiku♡!"
        type="text"
        class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
      />
      <input
        v-if="myInput === 'false'"
        value="Tidak masalah mungkin kita belum jodoh'nya:)."
        type="text"
        class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
      />
      <!-- end -->
      <!-- name -->
      <label
        for="text"
        class="block mb-2 text-sm font-medium text-gray-900 font-header"
      >
        Your name</label
      >
      <input
        v-model="name"
        type="text"
        name="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg capitalize focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
        placeholder="Oktaa"
      />
    </div>
    <!-- email -->
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
        Your email
      </label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Okta@gmail.com"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FE5E44] focus:border-[#FE5E44] block w-full p-2.5"
      />
    </div>
    <!-- text area -->
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
      Your message
    </label>
    <textarea
      name="msg"
      v-model="msg"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FE5E44] focus:border-[#FE5E44]"
      placeholder="Leave a message..."
    ></textarea>
    <button
      type="submit"
      value="Send"
      class="w-full text-white bg-homePrimary hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-homePrimary font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-500 mt-4"
    >
      Send message
    </button>
  </form>
</template>
