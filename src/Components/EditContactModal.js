import React,{useState,useEffect} from 'react';
import styles from './UI/ErrorModal.module.css';
import formstyles from './Forms.module.css';
import Card from './UI/Card';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';



const EditContactModal=props=>{

    const [name,setName]=useState(props.name);
    const [email,setEmail]=useState(props.email);
    const [error,setError]=useState(null);

    const onNameChange=(e)=>{ 
        setName(e.target.value);          
        

    }

    const onMailChange=(e)=>{
            
          setEmail(e.target.value);  
    
    }

    useEffect( ()=>{
        if(!name) {
            setError( {
                errorTitle:"Name Invalid",
                errorMessage:"Please enter name "
            })

            if(!email){
                setError( {
                    errorTitle:"email Invalid",
                    errorMessage:"Please enter email "
                })

            }
        }
},[name,email]);

    const editContact=(event)=>{
        event.preventDefault();
        console.log(`Ediited values ${name} ${email}` );
        props.closeEdit(false);
            
            
           
    }

    const errorHandler=()=>{
        
        setError(null);
    }
    return (
    
        <div>
            <div className={styles.backdrop} />
            <Card  className={styles.modal}>
            <header className={styles.header}>
            <h2> Edit Contact</h2>
            </header>

            <div classsName= {styles.content}>
            
            <form onSubmit={editContact}>
            <div className={ formstyles.center}>
                <div className={`${formstyles.inputbox}`}>
                
                <input type="textarea"  value= {name} onChange={onNameChange}  >
                </input>
                <span className={formstyles.span}>Name:</span>
                
                </div>
                <div className={formstyles.inputbox}>
                
                <input type="email"  value ={email} onChange={onMailChange} >
                </input>
                <span className={formstyles.span}>E-mail:</span>
                
                </div>
                
                </div>
            
            <footer className={styles.actions}>
            <Button type="submit" value="submit" >Submit
                    </Button>
            </footer>
            </form>

            </div>
            
        </Card>
        {error && ( <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} onConfirm={errorHandler}></ErrorModal >)}
        </div>
       
    )
  };

export default EditContactModal;