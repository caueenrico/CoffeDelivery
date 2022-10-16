import { createContext, useContext, useState } from "react";

//primeiro cria uma variavel como contexto
const CyclesContext = createContext({} as any)

//depois cria um componente ou funções que vai usar o contexto
function NewCycleForm() {
  let {activeCycle, setActiveCycle} = useContext(CyclesContext)

  return <h1>NewCycleForm: {activeCycle} 
  <button onClick={() => {
    setActiveCycle(activeCycle + 1)
  }}> modifica</button>
  </h1>
}

function CountDown () {
  const {activeCycle} = useContext(CyclesContext)
  return <h1>cCountDow: {activeCycle} </h1>
}

//
export function HomeContext() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{activeCycle, setActiveCycle}}> 
    <div>
        <NewCycleForm />
        <CountDown />
    </div>
    </CyclesContext.Provider>
  );
}