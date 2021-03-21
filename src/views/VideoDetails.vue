<template>
<div class="content">
  <div class="video-gallery">
            <video
                id="my-video"
                class="video-js vjs-big-play-centered"
                controls
                preload="auto"
                width="800"
                poster=""
                data-setup="{}">
                <source :src="event[id-1].videoUrl" type="video/mp4"/> 
                <p class="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a
                  web browser that
                  <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video>
            <div class="video-item-details">
                <div class="video-item-title">
                    <div v-if="event" class="gallery-item-caption">
                        <h2> {{ event[id-1].name }} </h2>
                        <p>718 watching now</p>
                        <div class="gallery-item-tags">
                            <span>Basketball</span>
                            <span>ProB</span>
                        </div>
                    </div>
                    <hr class="solid">
                </div>
                <div class="gallery-item-details">
                <div class="gallery-item-user">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
                </div>
                <div class="gallery-item-caption">
                    <h2>{{ $route.query.user }}</h2>
                    <p>{{ $route.query.details }}</p>
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data: function() {
        return {
            event: null
        }
    },
    methods: {
        getData() {
            //get data from an api
            //this.id
            var that = this; 

            // Make a request for all events
            axios.get('https://ccdb.dev.vaudience.net/events')
            .then(function (response) {
                // handle success
                that.event = response.data
                console.log(response);
            })

        }
    },
    mounted: function() {
        this.getData()
    }
}
</script>

<style>

</style>
