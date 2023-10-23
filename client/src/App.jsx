import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayScores from './DisplayScores';
import TeamScore from './TeamScore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TeamScore/>} />
        <Route path="/value" element={<DisplayScores/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
