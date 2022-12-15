
import styles from './GridItem.module.css'
import upImagem from '../../assets/up.png'
import downImagem from '../../assets/down.png'

export const GridItem = ({item}) => {
    return (
        <div className={styles.main} style= {{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImagem : downImagem} alt="" width="30"/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

                {item.yourImc &&
                    <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
                }

            <div className={styles.gridInfo}>
               <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
               </>
            </div>
        </div>
    );
    
}