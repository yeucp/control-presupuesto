const Filter = ({filter, setFilter}) => {
    
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="filtro">Filtrar gastos</label>
                    <select 
                        name="filtro" 
                        id="filtro"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">-- Todo --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filter;