import styles from '../css/WeatherMainInfo.module.css';
import Foggy from '../img/Foggy.png';
import PartlyCloundy from '../img/Partly-Cloudy.png';
import Rain from '../img/Rain.png';
import Snow from '../img/Snow.png';
import Storm from '../img/Storm.png';
import Sun from '../img/Sun-cool.png';

export function WeatherMainInfo({weather}) {

    const code = weather?.current?.condition?.code

    switch (code) {
        case 1000:
            var img = Sun;   
            break;
        case 1003:
            var img = PartlyCloundy;   
            break;
        case 1006:
        case 1063:
        case 1180:
        case 1186:
        case 1189:
        case 1240:
            var img = Rain;   
            break;
        case 1009:
            var img = Foggy;   
            break;
        case 1192:
        case 1195:
        case 1243:
        case 1246:
        case 1273:
        case 1276:
            var img = Storm;      
            break;
        case 1066:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1237:
        case 1255:
        case 1258:
        case 1261:
        case 1279:
        case 1282:
            var img = Snow;   
            break;
        default:
            var img = `http:${weather?.current?.condition?.icon}`;
            break;
    }

    console.log(img);
    console.log(weather?.current?.condition?.icon)

    return <div className={styles.infoContainer}>
        <div className={styles.infoLocation}>
            <div className={styles.infoName}>{weather?.location?.name}</div>
            <div className={styles.infoCountry}>{weather?.location?.country}</div>
        </div>
        <div className={styles.infoTemp}>
            <div className={styles.infoImg}>
                <img 
                src={img}
                width='140' 
                alt={weather?.current?.text} />
            </div>
            <div className={styles.infoCurrent}>
                <div className={styles.infoText}>{weather?.current?.condition?.text}</div>
                <div className={styles.infoTempC}>{weather?.current?.temp_c}°</div>
            </div>
        </div>  
    </div>
}