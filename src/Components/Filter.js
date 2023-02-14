import React from 'react';

const Filter=(props)=>{
    const alphabets=[];
    for(let i=65;i<90;i++){
        alphabets.push(String.fromCharCode(i));
    }
    
    const options=alphabets.map( (alphabet)=>{
        return(    
        <option value={alphabet} key={alphabet}>{alphabet}</option>
        );
        
    }) ;
    options.unshift(<option value="" key=""></option>)

    const selectedletter=(e)=>{
        props.onChange(e.target.value)
    }

    
    return(
        
        <div>
        <label for='alphabets'>Choose Starting Letter:</label>
        <select id='namefilter' name='namefilter' onChange={selectedletter}>
         
        {options}
    
        
        </select>
        
    </div>

    
    );
}

export default Filter;

