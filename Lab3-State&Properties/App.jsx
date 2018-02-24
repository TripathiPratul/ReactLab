import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[{ fName: 'Pratul', lName: 'Tripathi', Age: '36'},
                  { fName: 'Pratik', lName: 'Mutha', Age: '32'},
                  { fName: 'Mike', lName: 'Morales', Age: '27'}
                ]
        }
    }
    render() {
      return (
         <div>
             <Header/>
             <div>
                 {this.state.data.map((candidate, index) => <Candidate key={index} data={candidate} />)}
             </div>
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

class Candidate extends React.Component{
    render(){
        return (
            <table>
                <tr>
                    <td> Mr. {this.props.data.fName + ' ' + this.props.data.lName} is aged : {this.props.data.Age}
                    </td>    
                </tr>
            </table>    
        )
    }
}
export default App;