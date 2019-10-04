let vm = new Vue ({
    el: '#app',
    data : {
        message : 'test'
    },
    mounted () {
        axios
        .get('api.openweathermap.org/data/2.5/weather?lat=35&lon=139')
        .then(response => (console.log(response)))
        .catch(error => console.log(error))
    }
})