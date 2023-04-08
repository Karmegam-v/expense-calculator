/* eslint-disable no-unused-vars */
import './App.css';
// import First from './components/First';
// import Loginpage from './components/LoginPage'
// import Login from './components/Login';
import { Header } from './components/Header';
import { Balance } from './components/Balance';

import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './components/context/Globalstate';
import { IncomeExpenses } from './components/IncomeExpenses';

function App() {
  return (
    <GlobalProvider>
        {/* <Loginpage />
        <Login /> */}
        <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
