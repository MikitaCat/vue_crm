<template>
  <form class="card auth-card" @submit.prevent="submitHandler1">
    <div class="card-content">
      <span class="card-title">Home Bookkeeping</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >This field can't be empty</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Invalid Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Password</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Invalid password</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Password must contains at least
          {{ $v.password.$params.minLength.min }} characters. Now it contains
          only {{ password.length }} characters</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="userName"
          :class="{ invalid: $v.userName.$dirty && !$v.userName.required }"
        />
        <label for="name">Name</label>
        <small
          class="helper-text invalid"
          v-if="$v.userName.$dirty && !$v.userName.required"
          >Enter your Name</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>Agree with roles</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Registration
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Already register?
        <router-link to="/login">Enter!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      userName: "",
      agree: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
    userName: { required },
    agree: { checked: (v) => v },
  },
  methods: {
    submitHandler1() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        userName: this.userName,
      };
      console.log(formData);
      this.$router.push("/");
    },
  },
};
</script>
