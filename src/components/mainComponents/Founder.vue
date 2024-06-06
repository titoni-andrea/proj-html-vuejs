<script>

export default {
    name: "Founder",
    props: {
        foundersImg: Array
    },
    data() {
        return {
            timer: null,
            active: 0,
            direction:"left",
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
            this.direction="left";
            clearInterval(this.timer);
            if (this.active == 2) {
                this.active = 0;
            } else {
                this.active++;
            }
            this.timer = setInterval(this.nextImg, 5000);
        },
        prevImg() {
            this.direction="right";
            clearInterval(this.timer);
            if (this.active == 0) {
                this.active = 2;
            } else {
                this.active--;
            }
            this.timer = setInterval(this.prevImg, 5000);
        },
    },
    mounted() {
        this.timer = setInterval(() => {
            this.nextImg();
        }, 5000);
    }
}
</script>

<template>
    <!-- ancora da mettere responsive -->
    <div class="bkg_fafafa py-5">
        <div class="my_container">
            <div class="row justify-content-center align-items-center g-0">

                <!-- CAROUSEL -->
                <div class="col-5 my_cardLx position-relative">

                    <div class="my_carousel position-absolute w-100" v-for="element, index in foundersImg">
                        <Transition :name="direction" mode="in-out">
                            <img :src="getSvg(element, false)" class="w-100" v-show="index === active">
                        </Transition>
                    </div>

                    <div class="my_buttons">
                        <div @click="prevImg()" class="d-inline">
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </div>
                        <div @click="nextImg()" class="d-inline ms-3">
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </div>

                <!-- DESCRIPTION -->
                <div class="col-5 my_cardRx">
                    <div class="my_description w-100 py-5 px-5">
                        <h2>
                            Jason Bickford
                        </h2>
                        <p class="text-secondary">
                            Founder and Executive Director
                        </p>
                        <div class="my_separator"></div>
                        <p class="text-body-tertiary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus, ut nemo fugit
                            vero quas...
                        </p>
                        <div class="row justify-content-between">
                            <div class="col">
                                <a class="my_socialIcon">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a class="my_socialIcon">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a class="my_socialIcon">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            <div class="col">
                                <!-- spazio per eventuale firma -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="my_bkgCircle position-absolute">
                <img src="../../assets/svg/svg-4.svg" class="">
            </div>
        </div>

    </div>
</template>

<style scoped>
.my_socialIcon {
    text-decoration: none;
    color: white;

}

.my_socialIcon i {
    background-color: rgb(255, 70, 18);
    padding: 0.4rem;
    font-size: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    text-align: center;
    margin-right: 1rem;
}

p {
    margin-top: 1rem;
}

.my_container {
    max-width: 2000px;
    position: relative;
    margin: 0 auto;
    z-index: 0;
}

.my_cardLx {
    margin-right: -2rem;
    overflow: hidden;
    height: 25vw;

}

.my_cardRx {
    margin-left: -2rem;
}

.bkg_fafafa {
    background-color: #FAFAFA;
    color: black;
    width: 100%;
}

.my_description {
    background-color: #FFFFFF;
}

.my_separator {
    border: solid 0.08rem #FF4612;
    width: 5rem;
}

.my_bkgCircle {
    top: -3rem;
    right: 0;
    width: 30%;
    max-width: 30rem;
    z-index: -2;
    margin-right: 2rem;
}

.my_bkgCircle>img {
    object-fit: cover;
    max-width: 100%;
}

.my_cardLx .my_buttons {
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: #FF4612;
    color: white;
    font-size: 2rem;
    padding: 0.5rem;
}

.my_carousel {
    z-index: -1;
    height: fit-content;
}

.my_buttons div {
    cursor: pointer;
}

.left-enter-active {
    animation: slide-left-in 0.5s ease-in;
}

.left-leave-active {
    animation: slide-left-out 0.5s ease-in;
}

@keyframes slide-left-in {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes slide-left-out {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}

.right-enter-active {
    animation: slide-right-in 0.5s ease-in;
}

.right-leave-active {
    animation: slide-right-out 0.5s ease-in;
}

@keyframes slide-right-in {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes slide-right-out {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(100%);
    }
} 
</style>