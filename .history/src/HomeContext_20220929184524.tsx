import { createContext, useContext } from "react";

const CyclesContext = createContext({ 
  activeCycle: 1,
})

function NewCycleForm() {
  const {activeCycle} = useContext(CyclesContext)

  return <h1>NewCycleForm: {activeCycle} 
  
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