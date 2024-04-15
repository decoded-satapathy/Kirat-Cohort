import { memo, useState, useMemo, useCallback, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const logSomething = useCallback(function() {
    console.log("something has been logged")
  }, [])

  return <div>
    <ButtonComponent inputFunction={logSomething}></ButtonComponent>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

const ButtonComponent = memo(function({ inputFunction }) {
  console.log("re-rendered");
  return <div>
    <button onClick={inputFunction}>Click me to log something</button>
  </div>
});

export default App;


function useCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("your-url-here")
      .then(async function(res) {
        const ans = await res.json();
      })
  })

  return count;

}
function App() {

  const count = useCount();

  return <div>
  </div>
}
