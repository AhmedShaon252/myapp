import ClockList from './components/ClockList'
import Logo from './components/Logo'
import Form from './components/Form';

function App() {
  const number = [1]
  return (
    <div>
      <ClockList quantity={number} />
      <Form />
      <Logo />
    </div>
  );
}

export default App;
