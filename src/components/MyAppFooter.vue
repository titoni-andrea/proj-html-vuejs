<script>
export default {
    name: "MyAppFooter",
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>
    <footer>
        <div class="cont-flex">
            <div class="utility-info">
                <h3 class="titolo-info">About</h3>
                <hr class="linea">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consectetur, qui
                    sit et laboriosam tempora quo aperiam! Et, molestiae?</p>
                <div class="social">
                    <div class="social-cont">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div class="social-cont">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="social-cont">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>


            <div class="utility-info">
                <h3 class="titolo-info">Twitter</h3>
                <hr class="linea">
                <div class="link-twitter">
                    <i class="fa-brands fa-twitter"></i>
                    <p>Lorem ipsum <a href="#">curtedin</a> sit amet <a href="#">consectetur</a> adipisicing elit. Culpa
                        <a href="#">obcaecati</a> alias ex ipsam sunt
                        dolore?</p>
                </div>
                <div class="link-twitter">
                    <i class="fa-brands fa-twitter"></i>
                    <p>Lorem ipsum <a href="#">curtedin</a> sit amet <a href="#">consectetur</a> adipisicing elit. Culpa
                        <a href="#">obcaecati</a> alias ex ipsam sunt
                        dolore?</p>
                </div>

            </div>


            <div class="utility-info">
                <h3 class="titolo-info">Important links</h3>
                <hr class="linea">
                <ul class="lista-link">
                    <li>About me</li>
                    <li>About us</li>
                    <li>Language packs</li>
                    <li>Became a coach</li>
                    <li>Montly events</li>
                </ul>
            </div>


            <div class="utility-info">
                <h3 class="titolo-info">Contact me</h3>
                <hr class="linea">

                <div class="info-contatto">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>457 BigBlue Street, NY 10013</p>
                </div>
                <div class="info-contatto">
                    <i class="fa-solid fa-phone"></i>
                    <p>(315) 5512 2579</p>
                </div>
                <div class="info-contatto">
                    <i class="fa-solid fa-envelope"></i>
                    <p>everlead@mllkadoo.com</p>
                </div>
                <input class="form-nome" type="text" placeholder="Your Name">
                <p class="submit">SUBSCRIBE</p>

            </div>

        </div>

        <div class="note-legali">
            <p>Copiright EverleadCm kadooThemes</p>
        </div>

    </footer>
</template>

<style scoped>
footer {
    background-color: #181515;
}

.cont-flex {
    width: 1200px;
    margin: auto;
    display: flex;
    padding: 4rem 0px;
    gap: 20px;
}

.utility-info {
    width: 24%;
    font-size: 12px;
    color: #828181;
    position: relative;
}

.titolo-info {
    font-family: 'Times New Roman', Times, serif;
    color: white;
}

.linea {
    border: solid 1px #FE4613;
    width: 3rem;
    margin-top: 0.5rem;
}

.social {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #181515;
}

.social-cont {
    width: 1.6rem;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-cont i {
    font-size: 1rem;
    aspect-ratio: 1;
    padding: 0.3rem;
}

.link-twitter {
    display: flex;
    gap: 15px;
}

.link-twitter i {
    color: #FE4613;
}

.link-twitter a {
    color: #828181;
}

.lista-link {
    list-style-type: none;
    padding: 0;
}

.lista-link li {
    margin-bottom: 8px;
}

.info-contatto {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.info-contatto p {
    margin: 0;
}

.info-contatto i {
    color: #FE4613;
}

.form-nome {
    width: 100%;
    border: none;
    border-bottom: solid 1px lightgray;
    padding: 5px 0px;
    font-size: 12px;
    background-color: #181515;
    margin-top: 10px;
}

.submit {
    color: white;
    font-weight: bold;
    font-size: 12px;
    position: absolute;
    right: 0px;
    top: 162px;
}


.note-legali {
    background-color: #FE4613;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
}

.note-legali p {
    margin: 0;
    color: #fbd2c7;
}
</style>
