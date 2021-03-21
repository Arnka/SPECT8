<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">SPECT8<span class="brand-white">.live</span></a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
       <!-- <li class="nav-item">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
        </li> -->
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
          </router-link>
        </li>
        <!--<li class="nav-item">
            <a class="nav-link" href="javascript:;">{{ currentUser.email }}</a>
        </li>-->
        <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/videos" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.email }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Auth = namespace("Auth");

@Component
export default class AppNavbar extends Vue {
  @Auth.State("user")
  private currentUser!: any;

  @Auth.Action
  private signOut!: () => void;

  logOut() {
    this.signOut();
    this.$router.push("/login");
  }

}