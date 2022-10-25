import { Message } from './Message';
import './App.css';

function App() {
  const name = 'Шамиль';
  return (
    <div className="App">
      <Message name = { name } />
    </div>
  );
}

export default App;
