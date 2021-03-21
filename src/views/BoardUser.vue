<template>
    <div id="icon-bar">
      <router-link active-class="active" :to="{ name: 'Videos'}"><i class="fa fa-home"></i></router-link>
      <router-link to="/about"><i class="fa fa-bell"></i></router-link>
      <router-link to="/about"><i class="fa fa-envelope"></i></router-link>
      <router-link to="/about"><i class="fa fa-cog"></i></router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserService from "@/services/UserService";

@Component
export default class UserBoard extends Vue {
  private content = "";

  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
}
</script>

<style>
/* Side nav */

#icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#icon-bar a{
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
  background: #FF6114
}

#icon-bar a:hover {
  background: #9C3A09;
}

#icon-bar a:active{
  background-color: #9C3A09;
}

#icon-bar .active {
  background-color: #9C3A09;
}

</style>
