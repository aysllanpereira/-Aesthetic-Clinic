import Styles from '../Header/Header.module.css'
import Img from "../../assets/img/img-ayalla.jpeg"

export const Header = () => {

    const linkInsta = "https://www.instagram.com/dra.ayalla_pereira?igsh=dmdqOHpkczgweDl5&utm_source=qr";

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
            <p><a href={linkInsta} target='_blank'>@dra.ayalla_pereira</a></p>
            <p>CRBM DF 7126</p>
        </div>
        </>
    )
}