import "./App.css";

import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <section>
      <MyTitle/>
      <div>
        <PokemonCard/>
      </div>
    </section>

  );
}


export default App;