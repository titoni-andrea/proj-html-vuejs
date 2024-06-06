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
        changeVisibility () {
            if (this.elementsVisible == false) {
                this.elementsVisible = true
            } else {
                this.elementsVisible = false
            }
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


                <div class="arrow">⟶</div>
                <div class="dropdown">
                    <a class=" orange_text pe-4  fw-bold" href="#" id="dropdownHomes" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        HOMES
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.homes" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>


                <div class="arrow">⟶</div>
                <div class="dropdown">
                    <a class="orange_text pe-4  fw-bold" href="#" id="dropdownHomes" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        PAGES
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.pages" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>


                <div class="arrow">⟶</div>
                <div class="dropdown">
                    <a class="orange_text pe-4 fw-bold" href="#" id="dropdownHomes" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        BLOG
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.blog" class="dropdown-item" href="#">{{ element }}</a>

                    </div>
                </div>

                <div class="arrow">⟶</div>
                <div class="dropdown">

                    <a class=" pe-4 orange_text fw-bold" href="#" id="dropdownHomes" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        SHOP
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.shop" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>

                <div class="arrow">⟶</div>
                <div class="dropdown">

                    <a class="orange_text pe-4  fw-bold" href="#" id="dropdownHomes" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        EVENTS
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownHomes">
                        <a v-for="element in this.store.navBar.events" class="dropdown-item" href="#">{{ element }}</a>
                    </div>
                </div>

                <span class="arrow">⟶</span>

                <div>

                    <a class="pe-4 orange_text fw-bold" href="#" data-bs-toggle="collapse"
                        data-bs-target="#collapseElements" aria-expanded="false">
                        ELEMENTS
                    </a>

                </div>


                <a @click="changeVisibility ()" class="dropdown-item pe-4 text-dark fw-bold" href="#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>


                <a class="dropdown-item pe-3 text-dark fw-bold" href="#" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-bars"></i>
                </a>

                <div class="offcanvas offcanvas-end bg-dark text-light " data-bs-scroll="true" tabindex="-1"
                    id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header d-flex flex-column">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <img class="mt-5 mb-5" src="../../assets/svg/svg-1.svg">
                        <h2 class="offcanvas-title" id="offcanvasRightLabel">Everlead Theme<i
                                class="fa-solid fa-circle"></i></h2>


                    </div>
                    <div class="offcanvas-body d-flex flex-column">
                        <span class="text-center mb-2 contactCanvas"><i class="fa-solid fa-location-dot"
                                style="color: #FF4612;"></i>457 BigBlue Street, NY 10013</span>
                        <span class="text-center mb-2 contactCanvas"><i class="fa-solid fa-phone"
                                style="color: #FF4612;"> </i>(315) 5512-2579</span>
                        <span class="text-center mb-4 contactCanvas "><i class="fa-regular fa-envelope"
                                style="color: #FF4612;"></i>everlead@qodeinteractive.com</span>
                        <div style="margin-left: 5%;" class="d-flex justify-content-center"><input
                                class="bg-dark inputCanvas  " type="text" placeholder="Text">
                            <p class="mb-0">SUBSCRIBE</p>
                        </div>
                    </div>
                </div>






            </div>

        </div>
        <div v-if="elementsVisible" class="form-outline searchNav" data-mdb-input-init>
            <input style="height: 100%;" type="search" id="form1" class="form-control" placeholder="Search...." aria-label="Search" />
            <i @click="changeVisibility()" class="fa-solid fa-xmark" style="color: black; cursor: pointer;" ></i>
        </div>

    </nav>

    <div id="collapseElements" class="bg-dark collapse elementsContainer ">
        <div class="container d-flex">
            <div class="col-3 p-4">
                <h2 style="color: white;">Classic</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.classic">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2 style="color: white;"> Presentational</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.presentational">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2 style="color: white;">Infographic</h2>
                <ul class="list-group">
                    <li class="elements list-group p-1 lightslategray"
                        v-for="element in this.store.navBar.elements.infographic">{{ element }}</li>
                </ul>
            </div>
            <div class="col-3 p-4">
                <h2 style="color: white;">Typography</h2>
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
    background-color: #212529;
    width: 17rem;
    padding: 1rem;
}

.orange_text {
    text-decoration: none;
    color: black;
}

.orange_text:hover {
    color: #FF4612;
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

.arrow {
    color: #FF4612;
}

.elements {
    color: lightslategray;
}

.elements:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
}

.fa-circle {
    color: #FF4612;
    font-size: 0.3rem;
}

.inputCanvas {
    border: none;

}

.inputCanvas:focus-visible {
    border: black;
}

.contactCanvas {
    font-size: 15px;
    color: lightslategray;
}

.contactCanvas:hover {
    cursor: pointer;
    color: white;
}

.searchNav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;

}

.fa-xmark {
    position: absolute;
    top: 35%;
    right: 3%;
}

</style>