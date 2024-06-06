<script>
import store from '../../data/store.js'

export default {
    name: "NavBar",
    data() {
        return {
            store,
            elementsVisible: false,

        }
    },
    methods: {
        showElements() {
            this.elementsVisible = true;
        },
        hideElements() {
            this.elementsVisible = false;
        }



    },
}
</script>

<template>
    <nav class="navbar navbar-light bg-trasparent p-5">
        <div class="containerNav d-flex">
            <!-- LOGO NAV -->
            <div>
                <a class="navbar-brand" href="#">
                    <img src="../../assets/img/logo-img-01.png" width="25" height="25" class="logoHeader align-top">

                </a>
            </div>

            <!-- DROPDOWN LINK NAV -->
            <div class="dropdown d-flex">


                <div class="text-dark">⟶</div>
                <div class="dropdown">
                    <a class="dropdown-item pe-4 text-dark fw-bold" href="#" id="dropdownHomes"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HOMES
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.homes" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>


                <div class="text-dark">⟶</div>
                <div class="dropdown">
                    <a class="dropdown-item pe-4 text-dark fw-bold" href="#" id="dropdownHomes"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        PAGES
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.pages" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>


                <div class="text-dark">⟶</div>
                <div class="dropdown">
                    <a class="dropdown-item pe-4 text-dark fw-bold" href="#" id="dropdownHomes"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        BLOG
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.blog" class="dropdown-item" href="#">{{ element }}</a>

                    </div>
                </div>

                <div class="text-dark">⟶</div>
                <div class="dropdown">

                    <a class="dropdown-item pe-4 text-dark fw-bold" href="#" id="dropdownHomes"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SHOP
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.shop" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>

                <div class="text-dark">⟶</div>
                <div class="dropdown">

                    <a class="dropdown-item pe-4 text-dark fw-bold" href="#" id="dropdownHomes"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        EVENTS
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.events" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>

                <span class="text-dark arrow">⟶</span>

                <div>

                    <a class="pe-4 dropdown-item text-dark fw-bold" href="#" data-bs-toggle="collapse"
                        data-bs-target="#collapseContent" aria-expanded="false">
                        ELEMENTS
                    </a>

                </div>


                <a class="dropdown-item pe-4 text-dark fw-bold" href="#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>

                <a class="dropdown-item pe-3 text-dark fw-bold" href="#">
                    <i class="fa-solid fa-bars"></i>
                </a>

            </div>

        </div>
    </nav>

    <div id="collapseContent" class="bg-dark collapse elementsContainer ">
        <div class="container d-flex">
            <div class="col-3 p-4">
                <h2>Classic</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.classic">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2>Presentational</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.presentational">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2>Infographic</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.infographic">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2>Typography</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.typography">{{ element }}</li>
                </ul>
            </div>

        </div>
    </div>


</template>

<style scoped>
.containerNav {
    margin-left: 2rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: inherit;
    align-items: center;
}

.logoHeader {
    width: 100%;

}

.dropdown-menu {
    background-color: black;
    width: 17rem;
    padding: 1rem;
}

.dropdown-item {
    color: rgb(207, 204, 204);

}

.dropdown-item:hover {
    background-color: inherit;
    color: white;
}

.elementsContainer {
    position: absolute;
    width: 100%;

}

.elements {
    color: lightslategray;
}

.elements:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
}
h2{
    color:white;
}
</style>