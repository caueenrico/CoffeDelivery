import { createContext, useContext } from "react";

const CyclesContext = createContext({ 
  activeCycle: 1,
})

function NewCycleForm() {
  cont {activeCycle} = useContextext(CyclesContext)

  return <h1>NewCycleForm</h1>
}

function CountDown () {

  return <h1>cCountDow </h1>
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