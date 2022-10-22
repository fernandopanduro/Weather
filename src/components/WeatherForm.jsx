import { useState } from "react"
import styles from '../css/WeatherForm.module.css';


export function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('');

    function handleChange(e) {
        setCity(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        if (!city || city !== "") {
          onChangeCity(city);
        }
      }

    return (
        <form onSubmit={handleSubmit} className={styles.WeatherForm}>
            <h1>WEATHER</h1>
            <input 
            type="text"  
            onChange={handleChange}
            value={city}
            placeholder='Mazatlán' 
            className={styles.WeatherInput}/>
        </form>
    )
}