import './App.scss';

import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import Toast from './components/toast/toast';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Toast/>
    </>
  );
}

export default App;
