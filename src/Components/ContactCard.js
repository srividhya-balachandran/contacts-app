import React,{useState} from 'react';
import user from  '../Images/user.png';
import './ContactCard.css';
import EditContactModal from './EditContactModal';

const ContactCard=(props)=>{
    
    const {name,email}=props.contact;
    const id=props.id;
    const [editContact,setEditContact]=useState(false);

    const style={
        width:'auto',
        
    } 

    const deleteContact=()=>{
        console.log(id);
        props.deleteId(id);
    }

    const handleEdit=(bool)=>{
        alert("edit icon clicked");
        setEditContact(bool);
    }

    return (
        <div>
        <div className="card" style={{borderStyle:"double"}} >
  
  <div className="container">
    <div className="parentDiv" key={props.id}>
  <img src={user} alt="user" style={style}></img>
    <h4><b>{name}</b></h4>
    <p>{email}</p>
        </div>
        <div className="icon">
         <i className="material-icons" style={{ fontSize: '36px',color:'red',marginLeft:' 10px',float: 'right'}} onClick={deleteContact}>delete</i>
         <i className="fa fa-edit" style={{fontSize:'36px',marginLeft:' 10px',float: 'right'}} onClick={ ()=>{handleEdit(true)}} ></i>
       
        </div>
       
  </div>
</div>
{ editContact && <EditContactModal id={id} name={name} email={email} closeEdit={handleEdit}/>}
</div>

    )
}

export default ContactCard;