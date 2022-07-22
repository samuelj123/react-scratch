import { useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  useEffect(() => { document.title = "SOA Dashboard" })
  return (
    <>
      <Dashboard />
    </>

  );
}

export default App;
