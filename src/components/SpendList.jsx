import Spend from './Spend';

const SpendList = ({spends, filter, filteredSpends, setCurrentSpend, deleteSpend}) => {
    return (
        <div className='listado-gastos contenedor'>
            
            {
                filter ?
                <>
                    <h2>{filteredSpends.length === 0 ? 'No hay gastos en esta categoría' : 'Gastos'}</h2>
                    {filteredSpends.map(spend => (
                        <Spend
                            key={spend.id}
                            spend={spend}
                            setCurrentSpend={setCurrentSpend}
                            deleteSpend={deleteSpend}
                        />
                    ))}
                </>
                 :
                <>
                    <h2>{filteredSpends.length === 0 ? 'No hay gastos' : 'Gastos'}</h2>
                    {spends.map(spend => (
                        <Spend
                            key={spend.id}
                            spend={spend}
                            setCurrentSpend={setCurrentSpend}
                            deleteSpend={deleteSpend}
                        />
                    ))}
                </>
            }
            
        </div>
    );
};

export default SpendList;