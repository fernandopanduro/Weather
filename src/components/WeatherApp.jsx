import { useEffect, useState } from "react"
import { WeatherMainInfo } from "./WatherMainInfo";
import { WeatherForm } from "./WeatherForm"
import styles from '../css/WeatherApp.module.css';

export function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location?.name ?? ''}`
    }, [weather]);

    async function loadInfo(city = 'Mazatlan') {
        console.log(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
          );

        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
                );

            const json = await request.json();

            console.log(json);

            setTimeout(() => {
                setWeather({ ...json });
            }, 2000);

        } catch (e) {
            console.error(e);
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }


    return (
        <div className={styles.WeatherApp}> 
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather} />
        </div>
    )
}