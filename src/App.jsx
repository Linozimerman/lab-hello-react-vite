// src/App.jsx
import './App.css';
import Card from './Card';
import NavBar from './NavBar';


function App() {
  return (
    <>

      <div className="App">
        <div className="NavbarItem">
          <NavBar/>
        </div>
        <div className="container3">
          <Card srcUrl="./src/assets/roberto.png" h2Id="Declarative" pId="React makes it painless to create interactiveUIs" />
          <Card srcUrl="src\assets\roberto5.png" h2Id="Components" pId="Build encapsulated components that manage their state" />
          <Card srcUrl="src\assets\roberto4.png" h2Id="Single-Way" pId="A set of immutable values are passed to the components" />
          <Card srcUrl="src\assets\roberto3.png" h2Id="JSX" pId="Statically-typed, designed to run on modern browser" />
        </div>
      </div>
    </>

  );
}

export default App;
