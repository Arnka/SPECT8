<template>
<div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12 col-center">
          <div class="col-lg-12 login-icon">
            <i class="fa fa-user-circle"></i>
          </div>
          <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center sign-up">Don't have an account?
              <router-link to="/register" class="sign-up-link">
                Sign up
              </router-link>
            </p>
        <form name="form" @submit.prevent="handleLogin">
          <div class="form-group">
          <input
            v-model="user.email"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="email"
            placeholder="Email"
          />
          <div
            v-if="errors.has('email')"
            class="alert alert-danger"
            role="alert">
            Email is required!
          </div>
        </div>
        <div class="form-group">
          <input
            v-model="user.password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert">
            Password is required!
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
          <!-- <p class="input-text">Email address</p>
          <fieldset class="form-group">
            <input 
              class="form-control form-control-lg"
              type="text"
              v-model="user.email"
              v-validate="'required'"
              name="email"
              placeholder="">
            <div
              v-if="errors.has('email')"
              class="alert alert-danger"
              role="alert">
            Email is required!
          </div> 
          </fieldset>
          <p class="input-text">Password</p>
          <fieldset class="form-group">
            <input 
              class="form-control form-control-lg" 
              type="password"
              v-model="user.password"
              v-validate="'required'"
              name="password"
              placeholder="">
          </fieldset>
            <button @click="login()" class="btn btn-lg btn-primary btn-block">
              LOG IN
            </button>
            <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
            </div>
          </div> -->
        </form>
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
export default class Login extends Vue {
  private user: any = {email: "", password: "" };
  private loading: boolean = false;
  private message: string = "";

  @Auth.Getter
  private isLoggedIn!: boolean;

  @Auth.Action
  private login!: (data: any) => Promise<any>;

  created() {
    if (this.isLoggedIn) {
      this.$router.push("/videos");
    }
  }

  handleLogin() {
    this.loading = true;
    this.$validator.validateAll().then((isValid) => {
      if (!isValid) {
        this.loading = false;
        return;
      }

      if (this.user.email && this.user.password) {
        this.login(this.user).then(
          (data) => {
            this.$router.push("/videos");
          },
          (error) => {
            this.loading = false;
            this.message = error;
          }
        );
      }
    });
  }
}
</script>