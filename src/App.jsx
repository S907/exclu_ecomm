import logo from './logo.svg';
import './App.css';
import FragmentComp from './components/FragmentComp';
import Navigator from './navigator/Navigator';

const App = () => {
  return ( 
      <FragmentComp>
        <Navigator />
      </FragmentComp>
  );
};

export default App;
