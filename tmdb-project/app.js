new Vue({
  el:('#app'),
  data:{
    keyword:'',
    movies:'',
    result:'',
  },
  methods:{
    Search:function(){
         axios.get('https://api.themoviedb.org/3/search/movie?api_key=2dc386b3168f08be51414bf24ea40433&query=' + this.keyword)
         .then((response)=>{
           console.log(response)
           this.movies = response.data.results

         })
         .catch((err)=>{
           console.log(err)
         })
        }
    }
  })
