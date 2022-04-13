import logo from './logo.svg';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <Joke
        Punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke
        setup="I got my daughter a fridge for her birthday?"
        Punchline=" I can't wait to see her face light up when she opens it "
      />
      <Joke
        setup="How did the hacker escape the police?"
        Punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        Punchline="Swarm."
      />
    </div>
  );
}

export default App;
