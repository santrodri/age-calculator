import { useState } from 'react';
import './templates/styles/App.scss'
import DateInput from "./components/dateinput/DateInput";

function App() {
  const[date, setDate] = useState()
  const[actualDate, setActualDate] = useState(new Date())

  return (
    <main>
      <DateInput/>
    </main>
  );
}

export default App;
