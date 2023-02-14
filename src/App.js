import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Filter from './Components/Filter';
import React, { useState } from 'react';
import ContactList from './Components/ContactList';
import './index.css';

function App() {
  
 const [backdropblur,setBackdropblur]=useState(false);
  const [contacts,setContacts]=useState([]);
  const [selectedAlpha,setSelectedAlpha]=useState("");
  
  
 
const addContact=(contact)=>{
  console.log(contact);
  setContacts([...contacts,contact]);
  
}

const deleteId=(id) =>{
  console.log("Id in App.js" ,id);
  const newContactsList = contacts.filter(contact => contact.key !== id );
    setContacts(newContactsList);
}

const handleChange=(selectedLetter)=>{
  setSelectedAlpha(selectedLetter);
  console.log(selectedLetter);
  
  
}
const filteredContactsList= contacts.filter(contact=>{
  return(
    contact.name.startsWith(selectedAlpha)
  );
})

const reducer=(state,action)=>{
  if (action.type ==='Edit')
      return editContact();
}

const editContact=()=>{

}

  return (
    <div>
    <div  > 
      
    <Header headeroverlay={true}></Header>
    <Form addContact={addContact} ></Form>
    <Filter selected= {selectedAlpha} onChange={handleChange} ></Filter>
    {{selectedAlpha }==''&&  <ContactList contactlist={contacts} display={selectedAlpha} delete={deleteId}> </ContactList>}
    {{selectedAlpha} != '' && <ContactList contactlist={filteredContactsList} display={selectedAlpha} delete={deleteId}></ContactList>}
    </div>
    </div>
  );
}

export default App;
