import { useState } from 'react';
import styles from './Forms.module.css';
import { v4 as uuidv4 } from 'uuid';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const Form =(props)=>{
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [error,setError]=useState(null);
    
    const addContact=(event)=>{
        event.preventDefault();
        alert("inside onsubmit");
        if( name!=null&& name!='' && email!=null && email!=''){
        const cont={            
             key:uuidv4(),
             name:name,
             email:email,
         }
         
        props.addContact(cont);
        }
        else {
            if(name.trim().length===0){
                alert("No name");
                setError( {
                    errorTitle:"Name Invalid",
                    errorMessage:"Please enter name "
                })
            
            
            return;
            }
            if(email.trim().length===0){
                setError( {
                    errorTitle:"email Invalid",
                    errorMessage:"Please enter email "
                })
            return;
            }
        }
        setName("");
        setEmail("");

    }

    const onNameChange=(e)=>{           
        setName(e.target.value);

    }

    const onMailChange=(e)=>{
        
        setEmail(e.target.value);
        
    
    }
    
    const errorHandler=()=>{
        setError(null);
    }

    

    return (
        
    <div className={ styles.center}>
        <h1>New Contact</h1>
         <form onSubmit={addContact}>
                <div className={`${styles.inputbox}`}>
                <input type="textarea"  value= {name} onChange={onNameChange}  >
                </input>
                <span className={styles.span}>Name:</span>
                </div>
                <div className={styles.inputbox}>
                <input type="email"  value ={email} onChange={onMailChange} >
                </input>
                <span className={styles.span}>E-mail:</span>
                </div>
                <div className={styles.inputbox}>
                <Button type="submit" value="submit" >Submit
                    </Button>
                </div>

    
        </form>
        {error && ( <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} onConfirm={errorHandler}></ErrorModal >)}
        </div>
    );
}
export default Form;