import logo from './logo.svg';
import './App.css';
import Card from './component/card';

function App() {
  let content ={
    title:"React Class",
    desc:"React class is fantastic",
    author:"shikha",
    age:"17"
     }
  return (
    <div> 
    <Card content = {content}/>
    
    </div>
  );
}

export default App;
