import React from 'react';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    

    console.log(props.contactlist);
    const deleteItem=(id)=>{
        console.log("id in ContactList",id);
        props.delete(id);
    }

  

    const displayList=  props.contactlist.map( (contact)=>{
            return(
                <div>
                    <ContactCard id= {contact.key}
                        contact={contact} deleteId={deleteItem} />
                        
                </div>
                
            );
        })


        return (
            <div>
             {displayList}   
            </div> 

        
        )
        
};

export default ContactList;

 