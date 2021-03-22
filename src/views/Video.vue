<template>

<div class="content">
    <div class="video-gallery">   
            <div v-for="video in videos" class="gallery-item" :key="video.id">
                <div class="gallery-item-image">
                        <!-- use router-link component for navigation. -->
                        <!-- '<router-link>' will be rendered as an '<a>' tag by default -->
                    <router-link :to="{ name: 'VideoDetails', params: { id: video.id }, query: {title: video.title, user: video.user, details: video.details}}">
                        <img :src="video.poster" alt="Basketball" class="gallery-image">
                    </router-link>
                </div>
                <div class="gallery-item-details">
                    <div class="gallery-item-user">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
                    </div>
                    <div class="gallery-item-caption">
                        <h2>
                            {{ video.title }} 
                        </h2>
                        <p>
                            {{ currentUser.email }}
                        </p>
                        <div class="gallery-item-tags">
                            <span>{{video.tag}}</span>
                            <span>ProB</span>
                        </div>
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
import axios from 'axios';

@Component
export default class Video extends Vue {
  @Auth.State("user")
  private currentUser!: any;
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
data() {
     return {
        // Array of objects
        // I didn't get enough information from the API, that is why I decided to create an Array of objects
        // so I could fill in the missing information
        // In a real situation API would give me enough data so this would not be necessary
        videos: [
            { title: 'FC Bayern vs Real Madrid',
              id: 1,
              user: 'Rhein Stars Koln',
              poster: require('@/assets/thumb2.png'),
              details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo! Vel voluptate amet eveniet dignissimos modi suscipit reprehenderit neque asperiores! Sapiente reprehenderit quisquam tempore laudantium fugit aut ratione cupiditate molestias, similique vitae non suscipit dicta deleniti enim fugiat error, nihil sit corrupti. Totam, harum est cupiditate soluta accusamus quaerat inventore nemo officia quod sapiente blanditiis odit optio porro nostrum ex.',
              tag: 'Basketball',
            },
            { title: 'Paris Saint-Germain vs Manchester United',
              id: 2,
              user: 'Rhein Stars Koln',
              poster: require('../assets/thumb3.png'),
              details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo! Vel voluptate amet eveniet dignissimos modi suscipit reprehenderit neque asperiores! Sapiente reprehenderit quisquam tempore laudantium fugit aut ratione cupiditate molestias, similique vitae non suscipit dicta deleniti enim fugiat error, nihil sit corrupti. Totam, harum est cupiditate soluta accusamus quaerat inventore nemo officia quod sapiente blanditiis odit optio porro nostrum ex.',
              tag: 'Basketball',
            },
        ],
     };
 }
}
</script>

<style>
</style>