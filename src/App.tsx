import { useEffect } from 'react';
import './App.css';
import ProjectArc from './components/ProjectArc/ProjectArc';
import data from './services/data';

function App() {
  useEffect(() => { document.title = "SOA Dashboard" })
  return (
    <>
      <ProjectArc {...data} />
    </>

  );
}

export default App;
