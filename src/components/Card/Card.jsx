import Styles from '../Card/Card.module.css'

export const Card = () => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardContent}>

        <div className={Styles.socialCards}>
          <div className={`${Styles.cardzinho} ${Styles.cardzinhoLeft}`}>
            <i className='bi bi-whatsapp green'></i>
            <p>Agende sua consulta</p>
          </div>

          <div className={`${Styles.cardzinho} ${Styles.cardzinhoRight}`}>
            <i className='bi bi-download'></i>
            <p>Baixe o guia gratuito de cuidados estéticos</p>
          </div>

          <div className={`${Styles.cardzinho} ${Styles.cardzinhoLeft}`}>
          <i className='bi bi-star'></i>
            <p>Acesse nossa Comunidade VIP</p>
          </div>

          <div className={`${Styles.cardzinho} ${Styles.cardzinhoRight}`}>
            <i className='bi bi-geo-alt'></i>
            <p>Sua localização</p>
          </div>
        </div>

      </div>
    </div>
  )
}
