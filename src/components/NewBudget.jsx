import { useState } from "react";
import Alert from "./Alert";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || budget <= 0) {
      setMessage('Presupuesto no válido');
      return;
    }
    setMessage('');
    setIsValidBudget(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir presupuesto</label>
          <input
            type="number"
            name="presupuesto"
            id="presupuesto"
            placeholder="Añade tu presupuesto"
            className="nuevo-presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {message && <Alert tipo="error">{message}</Alert>}
      </form>
    </div>
  );
};

export default NewBudget;
