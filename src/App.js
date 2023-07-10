import "./styles.css";

function ButtonComponent() {
  function hancleClick() {
    return alert("I am Clicked...");
  }

  return <button onClick={hancleClick}>I'm Buttocn</button>;
}

export default function App() {
  return (
    <div className="App">
      <h1>My First React Github</h1>
      <ButtonComponent />
    </div>
  );
}
