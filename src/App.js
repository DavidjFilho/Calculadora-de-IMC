import styles from './App.module.css';
import imcImagem from './assets/imc.png';
import { useState } from 'react';
import { levels, calculateImc } from './Helpers/imc';
import { GridItem } from './components/GridItem'; 
import backImagem from './assets/leftarrow.png'

const App = () => {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const handleCalculeteButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    }else {
      alert("Digite todos os campos")
    }
  }

  const handlBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
          <header>
          <div className={styles.headerContainer}>
            <img src={imcImagem} alt="" width={150}/>
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule seu IMC.</h1>
            <p>Imc é a sigla para Índice de Massa Corpórea, 
              parâmetro adotado pela Organização Mundial de Saúde 
              para calcular o peso ideal de cada pessoa.
            </p>

            <input
              type="number"
              placeholder="Digite a sua altura. Ex: 1.75(em metros)"
              value={heightField > 0 ? heightField : '' }
              onChange={e => setHeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />
            <input
            type="number"
            placeholder="Digite a seu peso. Ex: 68kg (em kg)"
            value={weightField > 0 ? weightField : '' }
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            />

            <button onClick={handleCalculeteButton} disabled={toShow ? true : false}>Calcular</button>


          </div>
          <div className={styles.rightSide}>
            {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
            }
            {toShow && 
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handlBackButton}>
                  <img src={backImagem} alt="" width={25}/>
                </div>
                <GridItem item={toShow} />
              </div>
            }
          </div>
        </div>
    </div>
  );
}

export default App;
