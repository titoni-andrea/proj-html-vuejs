<script>
export default {
    name: "Founder",
    props: {
        sponsorImg: Object
    },
    data() {
        return {
            timer: null,
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
            clearInterval(this.timer);
            if (this.active == 4) {
                this.active = 0;
            } else {
                this.active++;
            }
            this.timer = setInterval(this.nextImg, 5000);
        },
        prevImg() {
            clearInterval(this.timer);
            if (this.active == 0) {
                this.active = 4;
            } else {
                this.active--;
            }
            this.timer = setInterval(this.prevImg, 5000);
        },
        activeImg(index) {
            if (index == this.active) {
                return true;
            } else {
                return false;
            }
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.nextImg();
        }, 5000);
        
    }
}
</script>

<template>
    <div class="contacts">
        <div class="cont-flex">
            <div class="cont-form">
                <div class="mappamondo">
                    <img src="/src/assets/img/h1-contact-rev-01.png" alt="">
                </div>
                <div class="form-contact">
                    <h2 class="titolo">Contact us<span class="arancio">.</span></h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        eaque.</p>
                    <hr class="linea">
                    <form>
                        <input class="form-nome" type="text" placeholder="Your Name">
                        <input class="form-mail" type="text" placeholder="Your Mail">
                        <input class="form-messaggio" type="text" placeholder="Write a message">
                        <div class="btn-form">
                            <p>SEND</p>
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </form>
                </div>
            </div>
            <div class="sponsor">
                <div class="cont-img-sponsor">
                    <img v-for="element, index in sponsorImg.hovered"  v-show="activeImg(index)":src="getSvg(element, false)" class="sponsor-hovered">
                    <img v-for="element, index in sponsorImg.standard"  v-show="activeImg(index)":src="getSvg(element, false)">  
                </div>
            
                <div class="cont-img-sponsor">
                    <img v-for="element, index in sponsorImg.hovered"  v-show="activeImg((index+1)%5)":src="getSvg(element, false)" class="sponsor-hovered">
                    <img v-for="element, index in sponsorImg.standard"  v-show="activeImg((index+1)%5)":src="getSvg(element, false)">  
                </div>

                <div class="cont-img-sponsor">
                    <img v-for="element, index in sponsorImg.hovered"  v-show="activeImg((index+2)%5)":src="getSvg(element, false)" class="sponsor-hovered">
                    <img v-for="element, index in sponsorImg.standard"  v-show="activeImg((index+2)%5)":src="getSvg(element, false)">  
                </div>

                <div class="cont-img-sponsor">
                    <img v-for="element, index in sponsorImg.hovered"  v-show="activeImg((index+3)%5)":src="getSvg(element, false)" class="sponsor-hovered">
                    <img v-for="element, index in sponsorImg.standard"  v-show="activeImg((index+3)%5)":src="getSvg(element, false)">  
                </div>

                <div class="cont-img-sponsor">
                    <img v-for="element, index in sponsorImg.hovered"  v-show="activeImg((index+4)%5)":src="getSvg(element, false)" class="sponsor-hovered">
                    <img v-for="element, index in sponsorImg.standard"  v-show="activeImg((index+4)%5)":src="getSvg(element, false)">  
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contacts {
    background-color: #FAFAFA;
    padding: 4rem 0px;
}

.cont-flex {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.cont-form {
    display: flex;
    width: 100%;
    gap: 2rem;
}

.mappamondo {
    width: 45%;
    padding: 1.5rem;
}

.mappamondo img {
    width: 100%;
}

.form-contact {
    width: 53%;
}

.titolo {
    color: #222;
    font-family: 'Times New Roman', Times, serif;
    font-size: 45px;
}

.arancio {
    color: #FE4613;
}

.sottotitolo {
    color: rgb(183, 181, 181);
}

.linea {
    border: solid 1px #FE4613;
    width: 3rem;
    margin-top: 0.5rem;
}

.form-nome {
    width: 48%;
    border: none;
    border-bottom: solid 1px lightgray;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #FAFAFA;
}

.form-mail {
    margin-left: 4%;
    width: 48%;
    border: none;
    border-bottom: solid 1px lightgray;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #FAFAFA;
}

.form-messaggio {
    width: 100%;
    border: none;
    border-bottom: solid 1px lightgray;
    padding: 5px 10px 50px 10px;
    font-size: 14px;
    margin-top: 15px;
    background-color: #FAFAFA;
}

.btn-form {
    background-color: #FE4613;
    width: 125px;
    display: flex;
    align-items: center;
    padding: 8px 0px;
    gap: 8px;
    margin-top: 20px;
    color:white;
}

.btn-form p {
    margin: 0;
    padding: 2px 25px;
    font-size: 14px;
    border-right: solid 1px white;
}

.sponsor {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.cont-img-sponsor {
    position: relative;
}

.sponsor-hovered {
position: absolute;
left: 0px;
opacity: 0%;
}

.sponsor-hovered:hover {
    opacity: 100%;
    transition: 0.5s;
}

</style>