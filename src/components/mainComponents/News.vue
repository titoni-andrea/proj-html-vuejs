<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="cont-flex">
        <div class="news">

            <h2 class="titolo">Latest news<span class="arancio">.</span></h2>
            <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque.</p>
            <hr class="linea">
            
            <div class="carousel">

                <div class="card">

                    <img src="/src/assets/img/h1-blog-img-02.jpg" alt="">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i> Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque.</p>
                    <p class="readme">READ ME</p>
                
                </div>

                <div class="card">

                    <img src="/src/assets/img/h1-blog-img-02.jpg" alt="">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i> Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque.</p>
                    <p class="readme">READ ME</p>

                </div>
                <div class="card">

                    <img src="/src/assets/img/h1-blog-img-02.jpg" alt="">
                    <p class="tag"><i class="fa-solid fa-tag"></i> Business Leading</p>
                    <p class="author"><i class="fa-regular fa-clock"></i> May 5, 2019 <i class="fa-regular fa-user"></i> Amanda Doe</p>
                    <h2 class="titolo">Next investments</h2>
                    <p class="sottotitolo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque.</p>
                    <p class="readme">READ ME</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cont-flex {
    background-color: #FAFAFA;
}

.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0px;
    width: 1200px;
    margin: auto;
}

.titolo {
    color: #222;
    font-family: 'Times New Roman', Times, serif;
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

.carousel {
    display: flex;
    gap: 1rem;
    width: 100%;
}

.card {
    width: calc((100% / 3) - 1rem);
    border: none;
    border-radius: 0px;
}

.readme {
    font-size: 14px;
    font-weight: bold;
}

.author {
    color: rgb(183, 181, 181);
    font-size: 12px;
    margin-bottom: 0px;
}

.author i {
    color: #FE4613;
}

.tag {
    background-color: #FE4613;
    width: 33%;
    color: rgb(209, 208, 208);
    padding: 5px 8px;
    font-size: 12px;
}
</style>