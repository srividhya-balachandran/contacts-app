import './Header.css';

const Header= (props)=> {
    let className= props.headeroverlay? "overlay ": ""  ;
    return (
    <header  className="header">
 <div className={className}>
     
    <h1>  My Contacts</h1>
   
   </div>
   </header>

    );


}

export default Header;
