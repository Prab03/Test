import logo from './logo.svg';
import './App.css';
import './calculator.js'
function App() {
  return (
    <body>
    <div className="App">
      
        <input type="text" placeholder="000000" id="box"></input>       
         <table>
            <tr>
                <td colspan="2" class="col">
                    <button class="clear">Clear</button>
                </td>
                <td>
                    <button class="backspace">X</button>
                </td>
                <td>
                    <button class="equals">=</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="num">7</button>
                </td>
                <td>
                    <button class="num">8</button>
                </td>
                <td>
                    <button class="num">9</button>
                </td>
                <td>
                    <button class="opr">+</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="num">4</button>
                </td>
                <td>
                    <button class="num">5</button>
                </td>
                <td>
                    <button class="num">6</button>
                </td>
                <td>
                    <button class="opr">-</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="num">1</button>
                </td>
                <td>
                    <button class="num">2</button>
                </td>
                <td>
                    <button class="num">3</button>
                </td>
                <td>
                    <button class="opr"  >/</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="num"  >.</button>
                </td>
                <td>
                    <button class="num">0</button>
                </td>
                <td>
                    <button class="num">log</button>
                </td>
                <td>
                    <button class="opr"  >*</button>
                </td>
            </tr>
        </table>
    </div>
    </body>
  );
}

export default App;
