$('#searchBtn').on('click',() => {
    const city = $('#inputCity').val();
    const requestHTTP = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=fc41099d3d362eb0a515e21884820e9e`;

    $.get(requestHTTP)
        .done(data => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            const requestHTTPWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fc41099d3d362eb0a515e21884820e9e`;

            $.get(requestHTTPWeather)
                .done(dataWeather => {
                    const temp = dataWeather.main.temp - 273.15;
                    $('#card').text(`Temperature in ${city}: ${Math.round(temp)}`);
                })
                .fail(err => {
                    alert(`Error: ${err.statusText}`);
                });
        })
        .fail(err => {
            alert(`Error: ${err.statusText}`);
        });
});