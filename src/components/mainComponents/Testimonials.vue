<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>

    <div class="testimonials">
        <h1 class="titolo">Testimonials.</h1>
        <i class="fa-solid fa-arrow-left-long next"></i>
        <i class="fa-solid fa-arrow-right-long back"></i>
        <div class="recensione">
            <img src="/src/assets/img/h3-img-04.png" alt="">
            <h4 class="nome-recensione">Cynthia clark</h4>
            <p class="descrizione">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem earum
                voluptatum incidunt velit, odio optio recusandae dignissimos similique vero."</p>
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