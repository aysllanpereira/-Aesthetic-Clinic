// import { useState } from 'react';
import Styles from '../Card/Card.module.css'

export const Card = () => {
  // link whatsapp = https://wa.me/${numberWhatsapp}?text=${encodeURIComponent(messageZap)}

  const handleWhats = () => {
    const numberWhats = "5561991694382";
    const messageZap = `Olá! Gostaria de agendar uma consulta!`;
    const linkWhats = `https://wa.me/${numberWhats}?text=${encodeURIComponent(messageZap)}`;
    window.open(linkWhats, "_blanck")
  }

  return (
    <div className={Styles.card}>
      <div className={Styles.cardContent}>

        <div className={Styles.socialCards}>
          <div className={`${Styles.cardzinho} ${Styles.cardzinhoLeft}`} onClick={handleWhats}>
            <i className='bi bi-whatsapp green'></i>
            <p>Agende sua consulta</p>
          </div>

          {/* <div className={`${Styles.cardzinho} ${Styles.cardzinhoRight}`}>
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
          </div> */}
        </div>

      </div>
    </div>
  )
}
