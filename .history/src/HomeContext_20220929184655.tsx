import { createContext, useContext } from "react";

const CyclesContext = createContext({ 
  activeCycle: 1,
})

function NewCycleForm() {
  let {activeCycle} = useContext(CyclesContext)

  return <h1>NewCycleForm: {activeCycle} 
  <button onClick={() => {
    activeCycle = 2
  }}> modifica</button>
  </h1>
}

function CountDown () {
  const {activeCycle} = useContext(CyclesContext)
  return <h1>cCountDow: {activeCycle} </h1>
}


export function HomeContext() {
  return (
    <div>
      <div>
        <NewCycleForm />
        <CountDown />
      </div>

    </div>
  );
}