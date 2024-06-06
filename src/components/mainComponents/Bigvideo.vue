<script>
export default {
    data() {
        return {
            visible:false,
        }
    },
    methods:{
        activeVisibility(){
            if(this.visible==false){
                this.visible=true;
            }else{
                this.visible=false;
            }
        }
    }
}
</script>

<template>
    <div class="big-video">
        <i class="fa-solid fa-play play" @click="activeVisibility()"></i>

        <div class="my_small-video" v-if="visible" @click="activeVisibility()">
            <iframe width="67%" height="90%" src="https://www.youtube.com/embed/ScMzIvxBSi4?si=XYvkW8mTN2YG5tAq"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<style scoped>
.my_small-video {
    background-color: rgba(0, 0, 0, 0.556);
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
}
iframe {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.my_show{
    display: block;
}
.my_video{
    display:none;
}

.big-video {
    width: 100%;
    height:700px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-image:url("/src/assets/img/h1-img-04.jpg") ;
    background-size: cover;
}

.big-video img {
    width: 100%;
}

.play {
    position: absolute;
    font-size: 33px;
    transition: 0.3s;
    cursor: pointer;
}

.play:hover {
    scale: 1.3;
}
</style>