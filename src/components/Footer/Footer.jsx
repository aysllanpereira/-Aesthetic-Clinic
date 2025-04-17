

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer>
            <div>
                <p>&copy; {year} Ayalla Pereira. Todos os direitos reservados.</p>
            </div>
        </footer>
        </>
    )
}