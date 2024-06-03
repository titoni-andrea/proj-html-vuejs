import { reactive } from "vue";
const store = reactive({
    immagini:{
        jumbotron: ["h1-rev-img-01.jpg","rev-slider-main-home-img-02.png","rev-slider-main-home-img-03.jpg"],
        skillsIcon: [{
            img:"svg-0.svg"
        },
        {
            img:"svg-1.svg"
        },
        {
            img:"svg-2.svg"
        },
        {
            img:"svg-3.svg"
        }],
        
        foundersImg: ["h1-img-03.jpg","h1-img-01.jpg","h1-img-02.jpg"],
        blog: ["h1-blog-img-01.jpg","h1-blog-img-02.jpg","h1-blog-img-03.jpg","h1-blog-img-04.jpg"],
        testimonialsAvatar:[
            {
                name: "Cynthia Clark",
                img : "h3-img-04.png",
                description: "loremloremlor emloremloremloremlor emloremlorem loremloremlo remlor emloremloremlorlorem loremlor "
            },
            {
                name: "Clarice Hastings",
                img : "h3-img-07.png",
                description:"loremlore mloremloreml oremloremloremlo remloremloremlore mloreml oremloreml oremloremremlor emlorem "
            }, 
            {
                name: "Brenda Kelly",
                img : "h3-img-08.png",
                description:"loremlor emloremlor emloremloremloremloremlo remloremloremlor emloremloreml oremloremremlo remlorem "
            }
        ],
        staff:[
            {
                name: "Christine Yin",
                role: "Founder",
                img : ""
            },
            {
                name: "Stephen Griffin",
                role: "Life Coach",
                img : ""
            },
            {
                name: "Sandra Harvey",
                role: "Instructor",
                img : ""
            },
            {
                name: "Ruth Hunter",
                role: "Manager",
                img : ""
            },
            {
                name: "Maya Adams",
                role: "Nutritionist",
                img : ""
            },
        ],
        logos:{
            standard:["h4-clients-img-01.png","h4-clients-img-03.png","h4-clients-img-05.png","h4-clients-img-07.png","h4-clients-img-09.png"],
            hovered:["h4-clients-img-02.png","h4-clients-img-04.png","h4-clients-img-06.png","h4-clients-img-08.png","h4-clients-img-10.png"],
        }
    }

});
export default store;