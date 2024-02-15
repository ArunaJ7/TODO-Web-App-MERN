import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, deleteToDo } from "./utils/HandleApi";
import image1 from "./images/img1.png"
import image2 from "./images/img2.png"

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {      
    getAllToDo(setToDo)
  }, [])

  useEffect(() => {
    setTodoCount(toDo.length);
  }, [toDo]);

  const calculateBottomMargin = () => {
    if (todoCount <= 5) {
      return 10;
    } else {
      return 30;
    }
  };

  return (
    <div className="App">
      
      <div className="img-container">
        <img className="img" src={image1} alt="Your Image" />
        <img className="img-small" src={image2} alt="Your Image" />

        <div className="top">
          <div className="title-input-container">
            <div className="title-container">
              <h1>My To Do List</h1>
              <h3>You have {toDo.length} tasks on the list</h3>
            </div>
            
            <div className="input-container">
              <input 
                type="text" 
                placeholder="Add ToDos..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />


                <div
                  className="add" 
                  onClick={
                    () => addToDo(text, setText, setToDo)}>
                  {"ADD"}
                </div>
            </div>
          </div>
         

        </div>

      </div>
       

      

      <div className="content"
           style={{ marginBottom: `${calculateBottomMargin()}px` }} 
      >

        <div className="list">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text} 
          
          deleteToDo = {()=> deleteToDo(item._id, setToDo)} />)}
        </div>
      </div>  
    </div>      
    

   
  );
}

export default App;
