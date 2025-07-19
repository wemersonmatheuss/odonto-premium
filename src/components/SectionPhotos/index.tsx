import styles from "./styles.module.css";
import { CardPhoto } from "../CardPhoto";
import salaConsultorio from "../../assets/salaConsultorio.jpg";

export function SectionPhotos() {
  const photos = [
    { img: salaConsultorio, space: "Sala de Atendimento" },
    { img: salaConsultorio, space: "Sala de Espera" },
    { img: salaConsultorio, space: "Consultório 1" },
    { img: salaConsultorio, space: "Consultório 2" },
  ];

  return (
    <section className={styles.container} id="photos">
      <div className={styles.title}>
        <h2>Conheça nosso espaço</h2>
      </div>

        <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
                {photos.concat(photos).map((photo, index) => (
                    <CardPhoto key={index} img={photo.img} space={photo.space} />
                ))}
            </div>
        </div>
    </section>
  );
}