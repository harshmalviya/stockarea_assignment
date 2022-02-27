import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import WarehouseDetailsScreen from './screens/WarehouseDetailsScreen';
function App() {
  return (
    <Router>
      <Header />
      <main style={{ width: '90%', margin: '0 auto' }}>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/:id" component={WarehouseDetailsScreen} exact />
      </main>
    </Router>
  );
}

export default App;
