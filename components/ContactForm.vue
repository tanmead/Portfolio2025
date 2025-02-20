<script setup>
import * as yup from 'yup'

const router = useRouter()

// Define validation schema
const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

// Initialize useForm with validation schema
const { handleSubmit, errors } = useForm({
  validationSchema,
})

// Create reactive fields
const { value: firstName } = useField('firstName')
const { value: lastName } = useField('lastName')
const { value: email } = useField('email')
const { value: message } = useField('message')

// Handle submit + send email
const onSubmit = handleSubmit(async (values) => {
  try {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    }
    const response = await $fetch("/api/sendEmail", {
      method: "POST",
      body: body
    });
    console.log(response.message)
    router.push('/success')

  } catch (error) {
    console.log('Error sending email', error)
  }
})

</script>

<template>
  <!--  Contact Form-->
  <form @submit.prevent novalidate class=" max-w-lg mx-auto p-3 mb-4 rounded-lg">
    <div class="mb-4">
      <label for="firstName" class="text-sm">
        First Name
        <span class="text-red-500">*</span>
      </label>
      <input
          type="text"
          id="firstName"
          name="firstName"
          v-model="firstName"
          class="p-1 w-full bg-white rounded-l-md ring-inset shadow-sm shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autofocus
      >
      <span class="text-red-500 text-sm">{{errors.firstName}}</span>
    </div>
    <div class="mb-4">
      <label for="lastName" class="text-sm">
        Last Name
        <span class="text-red-500">*</span>
      </label>
      <input
          type="text"
          id="lastName"
          name="lastName"
          v-model="lastName"
          class="p-1 w-full bg-white rounded-l-md ring-inset shadow-sm shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <span class="text-red-500 text-sm">{{errors.lastName}}</span>
    </div>
    <div class="mb-4">
      <label for="email" class="text-sm">
        Email Address
        <span class="text-red-500">*</span>
      </label>
      <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          class="p-1 w-full bg-white rounded-l-md ring-inset shadow-sm shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <span class="text-red-500 text-sm">{{errors.email}}</span>
    </div>
    <div class="mb-4">
      <label for="message" class="text-sm">
        Your Message
        <span class="text-red-500">*</span>
      </label>
      <textarea
          type="text"
          id="message"
          name="message"
          v-model="message"
          class="p-1 w-full bg-white rounded-l-md ring-inset shadow-sm shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
      ></textarea>
      <span class="text-red-500 text-sm">{{errors.message}}</span>
    </div>
    <div class="flex">
      <button
          type="button"
          class="btn w-90 m-auto rounded-full bg-blue-300 hover:shadow hover:cursor-pointer duration-300 hover:w-full hover:bg-blue-700 hover:text-white p-1"
          @click.prevent="onSubmit"
      >
        Submit
      </button>
    </div>
  </form>
  <div class="flex justify-center">
    <a href="mailto:tanner.r.mead@gmail.com" class="hover:text-blue-900">
      Prefer to email directly? Click here.
    </a>
  </div>
</template>

<style scoped>

</style>