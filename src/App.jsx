import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generateId } from "./helpers/index";
import SpendList from "./components/SpendList";
import Filter from "./components/Filter";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spends, setSpends] = useState(
    JSON.parse(localStorage.getItem('spends')) ?? []
  );
  const [currentSpend, setCurrentSpend] = useState({});
  const [filter, setFilter] = useState('')
  const [filteredSpends, setFilteredSpends] = useState([])

  useEffect(()=>{
    if(Object.keys(currentSpend).length !== 0){
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [currentSpend])

  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(()=> {
    localStorage.setItem('spends', JSON.stringify(spends ?? []))
  }, [spends])

  useEffect(()=>{
    if(filter){
      const newfilteredSpends = spends.filter(spend => spend.category === filter)
      setFilteredSpends(newfilteredSpends)
    }
  }, [filter])

  useEffect(()=>{
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    if(budgetLS !== 0){
      setIsValidBudget(true)
    }
  }, [])

  const handleNewSpend = () => {
    setCurrentSpend({})
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveSpend = spend => {
    if(spend.id){
      const updatedSpends = spends.map(spendState => spendState.id === spend.id ? spend : spendState )
      setSpends(updatedSpends)
      setCurrentSpend({})
    }else{
      spend.id = generateId();
      spend.date = Date.now()
      setSpends([...spends, spend]);
    }
    
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteSpend = id => {
    const updatedSpends = spends.filter(spendState => spendState.id !== id)
    setSpends(updatedSpends)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        spends={spends}
        budget={budget}
        isValidBudget={isValidBudget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
        setSpends={setSpends}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter
              filter={filter}
              setFilter={setFilter}
            />
            <SpendList
              spends={spends}
              filter={filter}
              filteredSpends={filteredSpends}
              setCurrentSpend={setCurrentSpend}
              deleteSpend={deleteSpend}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="IconoNuevoGasto"
              onClick={handleNewSpend}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          animateModal={animateModal}
          currentSpend={currentSpend}
          setAnimateModal={setAnimateModal}
          setModal={setModal}
          setCurrentSpend={setCurrentSpend}
          saveSpend={saveSpend}
        />
      )}
    </div>
  );
}

export default App;
