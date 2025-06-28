import AlphaVoxLanding from './components/AlphaVoxLanding';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';
import './App.css'

function App() {
  return (
    <AlphaVoxLanding onInitialize={(username) => {
      // You can call your backend here!
      // For now, just log the name
      console.log('User is', username);
    }} />
  );
}

export default App
