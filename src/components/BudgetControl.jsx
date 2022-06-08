import { useEffect, useState } from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({spends, budget, setBudget, setSpends, setIsValidBudget}) => {

    const [available, setAvailable] = useState(0)
    const [used, setUsed] = useState(0)
    const [percentage, setPercentaje] = useState(0)

    useEffect(()=>{
        const totalUsed = spends.reduce((total, spend) => Number(spend.quantity) + total, 0)
        const totalAvailable = budget - totalUsed
        setUsed(totalUsed)
        setAvailable(totalAvailable)
        //calc
        const newPercentage = (((budget - totalAvailable)/ budget) * 100).toFixed(2)
        setTimeout(()=>{
            setPercentaje(newPercentage)
        }, 1500)
    },[spends])

    const formatMoney = value => {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = ()=>{
        const result = confirm('Desea reiniciar la app')
        if(result){
            setBudget(0)
            setSpends([])
            setIsValidBudget(false)
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5'
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button 
                    className="reset-app" 
                    type="button"
                    onClick={handleResetApp}
                >Reseteaa app</button>
                <p>
                    <span>Presupuesto: </span>{formatMoney(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span>{formatMoney(available)}
                </p>
                <p>
                    <span>Gastado: </span>{formatMoney(used)}
                </p>
            </div>
        </div>
    );
};

export default BudgetControl;