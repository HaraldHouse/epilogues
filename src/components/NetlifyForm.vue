<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  message: "",
  response: "",
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

const submitForm = () => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "feedback",
      ...formData,
    }),
  })
    .then(() => {
      formData.response =
        "Thanks for your message, we'll get back to you shortly.";
    })
    .catch((error) => {
      formData.response = `❌ There was an error submitting your response: ${error.message}. Please refresh to try again.`;
    });
};
</script>

<template>
  <div>
    <section v-if="formData.response">
      <p class="bg-white py-4 text-black font-bold px-10">
        {{ formData.response }}
      </p>
    </section>

    <form
      v-else
      class="feedback-form"
      data-netlify="true"
      name="feedback"
      @submit.prevent
    >
      <div class="input-wrapper">
        <input
          name="name"
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="Your Name"
        />
      </div>

      <div class="input-wrapper">
        <input
          id="email"
          name="email"
          v-model="formData.email"
          type="email"
          placeholder="Your Email Address"
        />
      </div>

      <div class="input-wrapper">
        <textarea
          id="message"
          name="message"
          v-model="formData.message"
          placeholder="Your Message"
        />
      </div>

      <button
        class="bg-white text-black px-4 font-bold py-2 mt-0"
        type="submit"
        @click="submitForm"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style scoped>
.feedback-form {
  max-width: 600px;
  margin: 0 auto;
}

.input-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 5px;
  margin-bottom: 0.5rem;
  text-align: left;
}

.input-wrapper:last-child {
  margin-bottom: 0;
}

.input-wrapper input,
.input-wrapper input {
  @apply block w-full px-3 py-2 text-white bg-white/30;
}

.input-wrapper textarea {
  @apply w-full px-3 py-2 h-40 text-white bg-white/30;
}

.notification {
  border: 1px solid #222;
  border-radius: 8px;
  padding: 20px 0;
  max-width: 600px;
  margin: 0 auto;
}
</style>
