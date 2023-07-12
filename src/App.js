/* 
Hello! 
Say hello based on the time of day
by Giuseppe Allocca
JS exercise
*/
import "./styles.css";
const data = new Date(); //Date(2023,6,8,22);esempio
const ora = data.getHours();
const minuti = data.getMinutes();
const messaggio1 = "Good morning!";
const messaggio2 = "Good afternoon!";
const messaggio3 = "Good evening!";
var messaggio = "";
var stile = {};
if (ora <= 12) {
  messaggio = messaggio1;
  stile = { color: "red" };
} else {
  if (ora > 12 && ora < 19) {
    messaggio = messaggio2;
    stile = { color: "green" };
  } else {
    messaggio = messaggio3;
    stile = { color: "blue", backgroundColor: "#B58851" };
  }
}
export default function App() {
  return (
    <div className="App">
      <br />
      <h1>Say hello based on the time of day!</h1>
      <h2>
        right now it's :{ora}:{minuti}
      </h2>
      <br />
      <br />
      <br />
      <h2 style={stile}>{messaggio}</h2>
    </div>
  );
}
