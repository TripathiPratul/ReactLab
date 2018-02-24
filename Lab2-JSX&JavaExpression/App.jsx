import React from 'react';

class App extends React.Component {
    render() {
        var x =1;
        var y = 5;
        var z = 10;
        var spanStyle ={
            backgroundColor: 'Yellow',
            color: '#FF0000'
        };
      return (
         <div>
             <Header/>
            <span style={spanStyle}>The Result of expression 'x+y> 10' is { x+y > 10 ? 'TRUE': 'FALSE'}</span><br/>
            <span style={spanStyle}>The Result of expression 'x+z> 10' is { x+z > 10 ? 'TRUE': 'FALSE'}</span>
         </div>
      );
   }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome to React World!!</h1>
            </div>
        )
    }
}
export default App;