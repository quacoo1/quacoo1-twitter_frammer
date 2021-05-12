app.component('search',{
    data(){
        return {
            query:"",
        }
    },
    /*html*/
    template: 
    `<div>
        <input type="text" v-model="query">
        <button @click="submitQuery"> send</button>
    </div>`,
    methods:{
		submitQuery(){
			let query = this.query;
			let id = query.substring(query.lastIndexOf('/') + 1);

			axios.get(`/json/${id}`).then((response) => {
				let t = response.data.text;
                let tweet = t.replace(/(https:\/\/t.co\/([^\s]+))/gm, "");
				let user_name = `@${response.data.user.name}`;
				let profile_pic = response.data.user.profile_image_url;


                this.$emit('search-queried',{ user_name, tweet, profile_pic});
			});

			this.query = "";
		}
	}
});