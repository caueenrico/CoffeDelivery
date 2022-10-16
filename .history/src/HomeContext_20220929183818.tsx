function CountDown () {
  const { count } = useContext(HomeContext)
  return <div>{count}</div>
}


export function HomeContext() {
  return (
    <div>
      <h1>HomeContext</h1>
    </div>
  );
}