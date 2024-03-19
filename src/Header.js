import './Header.css';

function Header() {
    const dynamicVariable = 'Naa thaan da Leoo...Leo Dass'
    return (
        <div className="header-main-wrapper" style={{color:'black'}}> 
            {dynamicVariable}
        </div>
    )
}

export default Header;


// Inline Style 
// -> should use camel casing for all css attributes and the value should be wrapped in single quotes
    // Cheat : compound propertyname convert to camel case 
    // this ===> style={{background-color:'black'}} 
    // to ===> style={{backgroundColor:'black'}}
//   Eg:  style={{backgroundColor:'black'}}