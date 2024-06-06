<script>
export default {
    data() {
        return {
            mentorship: 0,
            education: 0,
            learning: 0,
            motivation: 0,
            timer1: null,
            timer2: null,
            timer3: null,
            timer4: null,
        }
    },
    methods: {
    },
    mounted() {

        const observer78 = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("my_stat78", entry.isIntersecting);
                    if (entry.isIntersecting) {
                        this.mentorship = 0;
                        this.timer1 = setInterval(() => {
                            if (this.mentorship < 78) {
                                this.mentorship++;
                            } else if (this.mentorship == 78) {
                                clearInterval(this.timer1)
                            }
                        }, 3000 / 78);
                        // observer78.unobserve(entry.target);
                    }
                })
            },
        );
        observer78.observe(this.$refs.mystat78);


        const observer95 = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("my_stat95", entry.isIntersecting);
                    if (entry.isIntersecting) {
                        this.education = 0;
                        this.timer2 = setInterval(() => {
                            if (this.education < 95) {
                                this.education++;
                            } else if (this.mentorship == 95) {
                                clearInterval(this.timer2)
                            }
                        }, 3000 / 95);
                        // observer95.unobserve(entry.target);
                    }
                })
            },
        );
        observer95.observe(this.$refs.mystat95);

        const observer65 = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("my_stat65", entry.isIntersecting);
                    if (entry.isIntersecting) {
                        this.learning = 0;
                        this.timer3 = setInterval(() => {
                            if (this.learning < 65) {
                                this.learning++;
                            } else if (this.mentorship == 65) {
                                clearInterval(this.timer3)
                            }
                        }, 3000 / 65);
                        // observer65.unobserve(entry.target);
                    }
                })
            },
        );
        observer65.observe(this.$refs.mystat65);

        const observer83 = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("my_stat83", entry.isIntersecting);
                    if (entry.isIntersecting) {
                        this.motivation = 0;
                        this.timer4 = setInterval(() => {
                            if (this.motivation < 83) {
                                this.motivation++;
                            } else if (this.mentorship == 83) {
                                clearInterval(this.timer4)
                            }
                        }, 3000 / 83);
                        // observer83.unobserve(entry.target);
                    }
                })
            },
        );
        observer83.observe(this.$refs.mystat83);

    }
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <div class="my_title pb-5">
                <h2 class="">Creative Leader<span class="my_textOrange">.</span></h2>
                <div class="my_separator my-3"></div>
                <p class="text-body-tertiary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quos
                    sapiente alias sed ipsam eveniet totam repellat. Officiis quibusdam, voluptates laboriosam odio fuga
                    animi sed alias maiores nihil magnam cupiditate!</p>
                <p><strong>READ MORE</strong></p>
            </div>
        </div>
        <div class="col-6">

            <div class="my_stat">
                <div class="my_statText d-flex justify-content-between">
                    <h5>Mentorship</h5>
                    <h5>{{ mentorship }}%</h5>
                </div>
                <div class="my_statBar">
                    <div class="my_statBarBase" ref="mystat78"></div>
                </div>
            </div>

            <div class="my_stat">
                <div class="my_statText d-flex justify-content-between">
                    <h5>Education</h5>
                    <h5>{{ education }}%</h5>
                </div>
                <div class="my_statBar">
                    <div class="my_statBarBase" ref="mystat95"></div>
                </div>
            </div>

            <div class="my_stat">
                <div class="my_statText d-flex justify-content-between">
                    <h5>Learning</h5>
                    <h5>{{ learning }}%</h5>
                </div>
                <div class="my_statBar">
                    <div class="my_statBarBase" ref="mystat65"></div>
                </div>
            </div>

            <div class="my_stat">
                <div class="my_statText d-flex justify-content-between">
                    <h5>Motivation</h5>
                    <h5>{{ motivation }}%</h5>
                </div>
                <div class="my_statBar">
                    <div class="my_statBarBase" ref="mystat83"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    background-color: #fff;
    color: black;
}

.my_separator {
    border: solid 0.08rem #FF4612;
    width: 5rem;
}

.my_textOrange {
    color: #FF4612;
}

.my_stat {
    margin-bottom: 2rem;
}

.my_statBar {
    width: 100%;
    border-bottom: solid rgba(0, 0, 0, 0.223) 1px;
    position: relative;
}

.row {
    max-width: 1600px;
    margin: 0 auto;
    padding: 7rem;
}

.my_statBarBase {
    width: 0%;
    height: 3px;
    transition: 3s;
}

.my_stat78 {
    width: 78%;
    background-color: #FF4612;
}

.my_stat95 {
    width: 95%;
    background-color: #FF4612;
}

.my_stat65 {
    width: 65%;
    background-color: #FF4612;
}

.my_stat83 {
    width: 83%;
    background-color: #FF4612;
}
</style>