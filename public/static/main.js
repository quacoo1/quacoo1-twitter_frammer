const app = Vue.createApp({
	data(){
		return {
			search_results: {user_name:'',tweet:'', profile_pic:''},
		}
        
	},
	methods: {
		displayResults(search_results){
			this.search_results = search_results;
		}
	}
});