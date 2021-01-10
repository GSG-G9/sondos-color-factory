
import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';

const Colors = (props) => {

  const {
    history : {push},
  }=props;

  return(
  <Router>
     <div className="App">
        <header className="App-header"> Welcome to the color factory
          <p className="link" onClick={()=>push('/new')}>Add a color</p>
        </header>
      
     </div>
   
     <div className="App"> 
    <p className="link" onClick={()=>push('/colors/red')}>red</p>
    <p className="link" onClick={()=>push('/colors/green')}>green</p>
    <p className="link" onClick={()=>push('/colors/blue')}>blue</p>
    

    
      {/* <ul>
        <li>
          <Link to="/colors/red">red</Link>
        </li>
        <li>
          <Link to="/colors/green">green</Link>
        </li>
        <li>
          <Link to="/colors/blue">blue</Link>
        </li>
      </ul> */}
    </div>
  <Switch>
<Route exact path="/colors/:color" component={ChosenColor}/>
   
  </Switch>
 
</Router>
)
}

const ChosenColor = ({match, location, history}) =>{

  const {color} = match.params;
  const {goBack} = history
  return(
    <>
    <div className={`color-container ${color}`}>
    <h1 >This is {color}</h1>
    <h1 className="link" onClick={()=>goBack()}>Go Back</h1>
    </div>
    </>
  )

}

const newColor = () => {

   return(
   <div className="blue">hiiii</div>
) 
}
 


function App() {
  return (
    <Router>
           
      <Link to='/colors'></Link>
  
     <Route exact path="/colors" component={Colors}/>
     <Route path="/colors/:color" component={ChosenColor}/>
     <Route path="/new" component={newColor}/>
     
    </Router>
  );
}

export default App;
