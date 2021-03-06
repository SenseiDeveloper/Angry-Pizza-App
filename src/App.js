import './App.scss';

import {Header} from "./components/componentHeader/Header";
import {Main} from "./components/componentMain/Main";
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
