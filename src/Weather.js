import React, {useEffect, useState} from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let apiKey = "2a4329374f5d556032afef2f2ef221eb";
let city = "Toronto, Canada";

function Weather(){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        let api = `${apiUrl}&q=${city}&appid=${apiKey}&units=metric`;
        fetch(api).then(response => response.json()).then(data => {
            setWeather(data);
        })
    }, []);

    return(
        <h3>It is currently {weather && weather.main.temp} degrees in Toronto.</h3>
    );
}
export default Weather;