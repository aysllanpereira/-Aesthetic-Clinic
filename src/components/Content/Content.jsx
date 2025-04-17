import { Card } from "../Card/Card"
import { Header } from "../Header/Header"
import Styles from "../Content/Content.module.css"
import { Footer } from "../Footer/Footer"

export const Content = () => {
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.divContent}>
                <Header />
                <Card />
                <Footer />
                </div>
            </div>
        </>
    )
}