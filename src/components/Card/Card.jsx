
import Styles from '../Card/Card.module.css'

export const Card = () => {

  const handleWhats = () => {
    const numberWhats = "5561991694382";
    const messageZap = `Olá! Gostaria de agendar uma avaliação.`;
    const linkWhats = `https://wa.me/${numberWhats}?text=${encodeURIComponent(messageZap)}`;
    window.open(linkWhats, "_blanck")
  }

  return (
    <section>
      <div className={Styles.card}>
        <div className={Styles.cardContent}>

          <div className={Styles.socialCards}>
            <div className={`${Styles.cardzinho} ${Styles.cardzinhoLeft}`} onClick={handleWhats}>
              <i className='bi bi-whatsapp green'></i>
              <p>Agende sua consulta</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
