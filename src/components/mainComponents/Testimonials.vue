<script>
export default {
    props: {
        testImg: Array
    },
    data() {
        return {
            active: 0,
        }
    },
    methods: {
        getSvg(name, isSvg) {
            if (isSvg) {
                return new URL(`../../assets/svg/${name}`, import.meta.url).href;
            } else {
                return new URL(`../../assets/img/${name}`, import.meta.url).href;
            }
        },
        nextImg() {
            if (this.active == 2) {
                this.active = 0;
            } else {
                this.active++;
            }
        },
        prevImg() {
            if (this.active == 0) {
                this.active = 2;
            } else {
                this.active--;
            }
        },
        activeImg(index) {
            if (index == this.active) {
                return true;
            } else {
                return false;
            }
        }
    },
}
</script>

<template>

    <div class="testimonials">
        <h1 class="titolo">Testimonials.</h1>
        <i @click="prevImg()" class="fa-solid fa-arrow-left-long next"></i>
        <i @click="nextImg()" class="fa-solid fa-arrow-right-long back"></i>
        <div v-for="element, index in testImg" v-show="activeImg(index)" class="recensione">
            <img :src="getSvg(element.img, false)">
            <h4 class="nome-recensione">{{element.name}}</h4>
            <p class="descrizione">{{element.description}}</p>
        </div>
    </div>
</template>

<style scoped>
.testimonials {
    background-color: #1E1C1C;
    position: relative;
    padding: 7.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.testimonials i {
    z-index: 1;
    position: absolute;
    top: 50%;
    font-size: 22px;
}

.next {
    left: 8%;
}

.back {
    right: 8%;
}

.titolo {
    color: #181515;
    font-family: 'Times New Roman', Times, serif;
    font-size: 210px;
    text-align: center;
    position: absolute;
    top: -50px;
    font-weight: bold;
}

.recensione {
    display: flex;
    flex-direction: column;
    width: 50%;
    z-index: 1;
    align-items: center;
    gap: 15px;
}

.recensione img {
    width: 20%;
}

.nome-recensione {
    font-family: 'Times New Roman', Times, serif;
}

.descrizione {
    font-weight: lighter;
    color: lightgrey;
}
</style>