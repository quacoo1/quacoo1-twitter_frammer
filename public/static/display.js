app.component('display',{
    props:{
        toDisplay: Object,
    },
    template:
    /*html*/
    `<div>
        <img :src="toDisplay.profile_pic" alt="" srcset=""><h4>{{ toDisplay.user_name }}</h4>
        <p>{{ toDisplay.tweet }}</p>
    </div>`,
    data(){
        return {
            display: this.toDisplay,
        }
    },
})