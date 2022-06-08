import { useState } from "react";
import IconoCerrar from "../img/cerrar.svg";
import Alert from "./Alert";

const Modal = ({animateModal, currentSpend, setAnimateModal, setModal,  saveSpend}) => {

    const [spend, setSpend] = useState({
        name: '',
        quantity: 0,
        category: ''
    })

    const [message, setMessage] = useState('')

    useState(()=>{
        if(Object.keys(currentSpend) !== 0){
            setSpend(currentSpend)
        }
    }, [])

    const {name, quantity, category} = spend

    const handleOnchange = e => {
        setSpend({
            ...spend,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        const values = [name.trim(), category.trim()]
        if(values.includes('')){
            setMessage('Todos los campos son requeridos')
            setTimeout(()=>{
                setMessage('')
            }, 3000)
            return
        }

        if(quantity === 0){
            setMessage('La cantidad debe ser mayor a cero')
            setTimeout(()=>{
                setMessage('')
            }, 3000)
            return
        }
        saveSpend(spend)
    }

    const hideModal = ()=>{
        setCurrentSpend({})
        setAnimateModal(false)
        setTimeout(()=>{
            setModal(false)
        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={IconoCerrar} 
                    alt="Cerrar modal"
                    onClick={hideModal}
                />
            </div>
            <form 
                className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleOnSubmit}
            >
                <legend>{currentSpend.name ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                {message && <Alert tipo="error">{message}</Alert>}
                <div className="campo">
                    <label htmlFor="name">Nombre del gasto</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Añade el name del gasto"
                        value={name || ''}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="quantity">Cantidad del gasto</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        id="quantity" 
                        placeholder="Añade la cantidad del gasto"
                        value={quantity  || ''}
                        onChange={handleOnchange}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="category">Categoría del gasto</label>
                    <select 
                        name="category" 
                        id="category"
                        value={category || ''}
                        onChange={handleOnchange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={currentSpend.name ? 'Guardar cambios' : 'Añadir gasto'} />
            </form>
        </div>
    );
};

export default Modal;