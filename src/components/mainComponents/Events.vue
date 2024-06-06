<script>
export default {
    name: "Events",
    props: {
        events: Array
    },
    methods: {
        getTime(date, type) {
            let objectDate = new Date(date);
            type = type.toLowerCase();
            switch (type) {
                case 'date':
                    return this.dateConverter(objectDate.getDate());
                case 'day':
                    return objectDate.getDay();
                case 'fullyear':
                    return objectDate.getFullYear();
                case 'hours':
                    return objectDate.getHours();
                case 'minutes':
                    return objectDate.getMinutes();
                case 'month':
                    return this.monthConverter(objectDate.getMonth());
                case 'seconds':
                    return objectDate.getSeconds();
                default:
                    console.log("error");
            }

        },
        monthConverter(month) {
            if (month < 0 || month > 12 || !Number.isInteger(month)) {
                console.log("Errore formato mese");
                return null;
            }
            switch (month) {
                case 0:
                    return "Jan.";
                case 1:
                    return "Feb.";
                case 2:
                    return "March";
                case 3:
                    return "April";
                case 4:
                    return "May";
                case 5:
                    return "June";
                case 6:
                    return "July";
                case 7:
                    return "Aug.";
                case 8:
                    return "Sept.";
                case 9:
                    return "Oct.";
                case 10:
                    return "Nov.";
                case 11:
                    return "Dec.";
            }
        },
        dateConverter(date) {
            if (date < 10) {
                date = date.toString();
                return "0" + date;
            }
            return date;

        }
    }
}
</script>

<template>
    <div class="bkg_image mt-5">
        <div class="row g-0 justify-content-center h-100">
            <div class="col-4 my_eventWidth">
                <div class="my_upcomingEvents">
                    <header class="p-3">
                        <h3>Upcoming Events</h3>
                    </header>
                    <section v-for="element in events" class="p-3">
                        <div class="row">
                            <div class="col-3">
                                <div class="w-100 my_calendarIcon text-center">
                                    <h3 class="py-0">
                                        {{ getTime(element.date, "date") }}
                                    </h3>
                                    <div class="">
                                        {{ getTime(element.date, "month") }}
                                        {{ getTime(element.date, "fullyear") }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-9">
                                <div class="my_eventName">
                                    <h4>
                                        {{ element.event }}
                                    </h4>
                                </div>
                                <div class="my_eventTime text-secondary">
                                    
                                    <i class="fa-regular fa-clock"></i>
                                    {{ element.startTime }} - {{ element.finishTime }},
                                    {{ getTime(element.date, "month") }}
                                    {{ getTime(element.date, "date") }},
                                    {{ getTime(element.date, "fullyear") }}

                                </div>
                                <div class="my_eventLocation text-secondary">

                                    <!-- l'icona del mokup è a pagamento -->
                                    <i class="fa-solid fa-location-dot"></i> 
                                    {{ element.location }}

                                </div>

                                <div class="my_eventDescription">
                                    <strong>READ MORE</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<style scoped>
.bkg_image {
    background-image: url("../../assets/img/h1-img-09.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    padding:5rem;
    min-width:1200px;
    color:black;
}

.my_upcomingEvents>header,
.my_upcomingEvents>section {
    background-color: #FAFAFA;
    border-bottom: rgba(0, 0, 0, 0.074) solid 1px;
}

.my_upcomingEvents {
    overflow: auto;
}

.my_calendarIcon {
    background-color: #FF4612;
    color: white;
    max-width:max-content;
    padding:0.5rem;
}
.my_eventTime>i,.my_eventLocation>i{
    color: #FF4612;
    width:2rem;
}
.my_eventWidth{
    min-width: 450px;
    max-width:480px;
}
.my_eventDescription{
    cursor: pointer;
}
</style>