import Styles from '../Footer/Footer.module.css'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <div className={Styles.footer}>
                <p>&copy; {year} Ayalla Pereira. Todos os direitos reservados.</p>
            </div>
        </footer>
        </>
    )
}