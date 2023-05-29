import React, { useState, useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import Form from './components/Form';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

const initialExp = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  // ****************** State Values ******************
  const [expenses, setExpenses] = useState(initialExp);
  const [charge, setCharge] = useState("")
  const [amount, setAmount] = useState("")
  const [alert, setAlert] = useState({show: false});
  const [showWarning, setShowWarning] = useState(false);
  const [itemWarning, setItemWarning] = useState({show: false, itemName: ""});
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses]);
  // ****************** Functionality ******************
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleAlert = ({type, message}) => {
    setAlert({show: true, type, message});
    setTimeout(() => {
      setAlert({show:false})
    },6000)
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (charge !== "" && amount >= 0 && amount !== ''){
      if (edit){
        const tempExpenses = expenses.map((item) => {
          return item.id === selectedId ? {...item, charge, amount} : item;
        });
        setExpenses(tempExpenses);
        setEdit(false)
        handleAlert({type: "success", message: `Item successfully edited!`});
      } else{
        const singleExp = {id:uuidv4(), charge, amount};
        setExpenses([...expenses, singleExp]); 
        handleAlert({type:'success', message: `${charge} has been successfully added!`})  
      }
      setAmount("");
      setCharge("");
    } else {
      handleAlert({type: 'danger', message: 'Kindly type in what you want to enter!'});
    }
  };

  const clearItems = () =>{
    if (showWarning){
      setExpenses([]); 
      setShowWarning(false);
      handleAlert({type:"danger", message: "All items deleted!"})
    } else{
      setShowWarning(true);
    }
  };

  const handleDelete = (id) => {
    const expense = expenses.find(item => item.id === id);
    const itemName = expense.charge;

    setSelectedId(id);
    setItemWarning(true);
    setItemWarning({show: true, itemName})
  }

  useEffect(() => {
    if (confirmDelete && selectedId) {
      const deletedItem = expenses.find(item => item.id === selectedId);
      if (deletedItem){
        const tempExpenses = expenses.filter(item => item.id !== selectedId);
        setExpenses(tempExpenses);
        handleAlert({type: "danger", message: `${deletedItem.charge} deleted!`});
        setConfirmDelete(false);
        setSelectedId(null)
      }
    }
    if (confirmDelete){
      setItemWarning(false);
      setConfirmDelete(false);
    }
  }, [confirmDelete, expenses, selectedId]);

  const handleEdit = (selectedId) =>{
    const editedItem = expenses.find(item => item.id === selectedId);
    const {charge, amount} = editedItem;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setSelectedId(selectedId);
  }

  return (
    <>
      {alert.show && <Alert 
        type={alert.type} 
        message={alert.message} 
        className="alert" 
      />}

      {itemWarning.show && (
        <div className='item-warning'>
          Are you sure you want delete "<span className='item-name'>{itemWarning.itemName}</span>"?
          <div className='warning-buttons'>
            <button className='button warning-no' onClick={() => setConfirmDelete(true)}>Yes</button>
            <button className='button warning-yes' onClick={() => setItemWarning(false)}>No</button>
          </div>
        </div>
      )}

      <h1 className='expenses-header'>expenses calculator</h1>

      <main className="App">
        <Form 
          charge={charge} 
          amount={amount} 
          handleAmount={handleAmount} 
          handleCharge={handleCharge} 
          handleSend={handleSend} 
          edit={edit} 
        />
        <List 
          expenses={expenses} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit}
          clearItems={clearItems}  
        />
        {showWarning && (
          <div className='warning'>
            Are you sure you want to clear all items?
            <div className='warning-buttons'>
              <button className='button warning-no' onClick={clearItems}>Yes</button>
              <button className='button warning-yes' onClick={() => setShowWarning(false)}>No</button>
            </div>
          </div>
        )}
      </main>
      <h1>
        Total Expenses: <span className='total'>
          $ {expenses.reduce((accumulator, currentValue) => {
            return (accumulator += parseFloat(currentValue.amount));
          }, 0)}
        </span>
      </h1>

    </>
  );
}

export default App;