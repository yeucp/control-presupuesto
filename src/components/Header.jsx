import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({spends ,budget, isValidBudget, setBudget, setIsValidBudget, setSpends }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidBudget ? (
        <BudgetControl
          spends={spends}
          budget={budget}
          setBudget={setBudget}
          setSpends={setSpends}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
