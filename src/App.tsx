import React, {useState} from 'react';
import './App.css';
import './Card/Card';
import Card from "./Card/Card";
import {cardItemItf, cardItemStatusEnm} from "./interface/template";
import Form from "./Form/form";

function App() {

    const [todo,setTodo] = useState<cardItemItf[]>(new Array(3).fill(null)
        .map((item,index)=>(item)={
            title:`TODO item ${index}`,
            description:"Lorem ipsum",
            status:cardItemStatusEnm.TODO}
        ));

    const [doing,setDoing] = useState<cardItemItf[]>(new Array(2).fill(null)
        .map((item,index)=>(item)={
            title:`DOING item ${index}`,
            description:"Lorem ipsum",
            status:cardItemStatusEnm.DOING}
        ));
    const [done,setDone] = useState<cardItemItf[]>(new Array(0));

    const [newItem,setNewItem]=useState<cardItemItf>({} as cardItemItf);
    const [showForm,setShowForm]=useState<boolean>(false);
    const [background,setBackground]=useState<string>("todo");
    const [origin,setOrigin]=useState<cardItemStatusEnm>("" as cardItemStatusEnm);
    let mod=showForm?"blurred":"";

  return (
      <div className={"App"}>
          <header>
              <div className={"header"}>
                  <h2>My TypeScript To Do List</h2>
                  <p>Planned dreams become reality</p>
              </div>

              <div>
                      <button onClick={()=> {
                          setShowForm(true);
                          setNewItem({} as cardItemItf);
                      }} id={"top__btn"}>Add Task</button>
              </div>
              <hr/>
          </header>

          <div className={"body "+mod}>
            <Card
                title={`Ready To Start`}
                classPlus={"todo"}
                cardItems={todo}
                setNewItem={setNewItem}
                setShowForm={setShowForm}
                id={0}
                setOrigin={setOrigin}
            />
            <Card
                title={"Working On It"}
                classPlus={"doing"}
                cardItems={doing}
                setNewItem={setNewItem}
                setShowForm={setShowForm}
                id={1}
                setOrigin={setOrigin}
            />
            <Card
                title={"Done"}
                classPlus={"done"}
                cardItems={done}
                setNewItem={setNewItem}
                setShowForm={setShowForm}
                id={2}
                setOrigin={setOrigin}
            />
          </div>
          {showForm&&
              <Form classPlus={background} setBackground={setBackground}
                            setShowForm={setShowForm} newItem={newItem}
                           arraySetter={[setTodo,setDoing,setDone]}
                           origin={origin}
                           setOrigin={setOrigin}
            />}
      </div>
  );
}
export default App;
