<template>
<div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12 col-center">
          <div class="col-lg-12 login-icon">
            <i class="fa fa-user-circle"></i>
          </div>
          <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center sign-up">Have an account?
              <router-link to="/login" class="sign-up-link">
                Sign in
              </router-link>
            </p>
        <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="form-group">
            <input
              v-model="user.email"
              v-validate="'required|email|max:50'"
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
            />
            <div v-if="submitted && errors.has('email')" class="alert-danger">
              {{ errors.first("email") }}
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="user.password"
              v-validate="'required|min:6|max:40'"
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >
              {{ errors.first("password") }}
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>
        <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'">
        {{ message }}
      </div>
      </div>
    </div>
  </div>
</div> 
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");

@Component
export default class Register extends Vue {
  private user: any = { email: "", password: "" };

  private submitted: boolean = false;
  private successful: boolean = false;
  private message: string = "";

  @Auth.Getter
  private isLoggedIn!: boolean;

  @Auth.Action
  private register!: (data: any) => Promise<any>;

  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/videos");
    }
  }

  handleRegister() {
    this.message = "";
    this.submitted = true;

    this.$validator.validate().then((isValid) => {
      if (isValid) {
        this.register(this.user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
          },
          (error) => {
            this.message = error;
            this.successful = false;
          }
        );
      }
    });
  }
}
</script>