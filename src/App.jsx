// App.jsx or index.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';



function App() {
  return (
    <Router>  {/* Ensure the entire app is inside a Router */}
      <Home />
      
    </Router>
  );
}

export default App;
