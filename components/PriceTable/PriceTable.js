import styles from './PriceTable.module.css';

export default function PriceTable() {
  return (
    <div className={styles.priceTableWrapper}>
        <div className={styles.row}>
            <p>Grabación de Guitarras</p>
            <p>Desde 30€ / tema</p>
            <p>Solo / Melodía / Frases</p>
        </div>
        <div className={styles.row}>
            <p>Mezcla</p>
            <p>Desde 30€ / tema</p>
            <p>De 2 a 4 pistas</p>
        </div>
        <div className={styles.row}>
            <p>Mezcla & Máster</p>
            <p>Desde 50€ / tema</p>
            <p>De 2 a 4 pistas</p>
        </div>
        <div className={styles.row}>
            <p>Edición, Mezcla & Máster</p>
            <p>Desde 80€ / tema</p>
            <p>De 2 a 4 pistas</p>
        </div>
        <div className={styles.row}>
            <p>Reamplificación</p>
            <p>Desde 20€ / pista</p>
            <p>-</p>
        </div>
        <div className={styles.row}>
            <p>Corrección / Procesado de Voces</p>
            <p>Desde 30€ / tema</p>
            <p>3 minutos aprox.</p>
        </div>
        <div className={styles.row}>
            <p>Edición / Procesado de Baterías</p>
            <p>Desde 30€ / tema</p>
            <p>3 minutos aprox.</p>
        </div>
        <div className={styles.row}>
            <p>Máster</p>
            <p>Desde 20€ / tema</p>
            <p>CD y streaming</p>
        </div>
        <div className={styles.row}>
            <p>Imagen DDP</p>
            <p>20€ / imagen</p>
            <p>-</p>
        </div>
        <div className={styles.row}>
            <p>Producción Musical Completa</p>
            <p>Desde 250€ / tema</p>
            <p>Consulta condiciones</p>
        </div>
        <p className={styles.noIva}>Los precios mostrados no incluyen IVA (21%).</p>
    </div>
  )
}
