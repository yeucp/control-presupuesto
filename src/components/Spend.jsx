import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'

import 'react-swipeable-list/dist/styles.css'

import {formatDate} from '../helpers/index'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripsiones from '../img/icono_suscripciones.svg'

const Spend = ({spend, setCurrentSpend, deleteSpend}) => {
    const {category, name, id, quantity, date} = spend

    const diccionarioIconos = {
        ahorro: IconoAhorro,
        comida: IconoComida,
        casa: IconoCasa,
        gastos: IconoGastos,
        ocio: IconoOcio,
        salud: IconoSalud,
        suscripciones: IconoSuscripsiones
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => setCurrentSpend(spend)}
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => deleteSpend(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img 
                            src={diccionarioIconos[category]}
                            alt="Icono gasto"
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">Agregado el: <span>{formatDate(date)}</span></p>
                        </div>
                    </div>
                    <div className="cantidad-gasto">${quantity}</div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Spend;