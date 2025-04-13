import Styles from '../Header/Header.module.css'
import Img from "../../assets/img/img-ayalla.jpeg"

export const Header = () => {
    return (
        <>
        <div className={Styles.header}>
            <img 
            src={Img} 
            alt="Ayalla Santos" 
            className={Styles.headerImg}
            />
            <h1>Ayalla Santos</h1>
            <p>Estética Natural e Sofisticação!</p>
            <p><a href="#">@dra.ayalla_pereira</a></p>
            <p>CRBM DF 7126</p>
        </div>
        </>
    )
}