import React, {useState} from 'react';
import './App.css';
import './Card/Card';
import Card from "./Card/Card";
import {cardItemItf, cardItemStatusEnm} from "./interface/template";
import Form from "./Form/form";
import Header from "./header/header";

function App() {

    const [todo,setTodo] = useState<cardItemItf[]>(new Array(2).fill(null)
        .map((item,index)=>(item)={
            title:`TODO item ${index}`,
            description:"Lorem ipsum",
            status:cardItemStatusEnm.TODO}
        ));

    const [doing,setDoing] = useState<cardItemItf[]>(new Array(1).fill(null)
        .map((item,index)=>(item)={
            title:`DOING item ${index}`,
            description:"Lorem ipsum",
            status:cardItemStatusEnm.DOING}
        ));
    const [done,setDone] = useState<cardItemItf[]>(new Array(0));

    const [newItem,setNewItem]=useState<cardItemItf>({} as cardItemItf);
    const [showForm,setShowForm]=useState<boolean>(false);
    const [background,setBackground]=useState<string>("todo");
    let mod=showForm?"blurred":"";

  return (
      <div className={"App"}>
          <React.StrictMode>

              <Header setShowForm={setShowForm} setNewItem={setNewItem}/>
              <div className={"body "+mod}>
                <Card
                    title={`Ready To Start`}
                    classPlus={"todo"}
                    cardItems={todo}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={0}
                />
                <Card
                    title={"Working On It"}
                    classPlus={"doing"}
                    cardItems={doing}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={1}
                />
                <Card
                    title={"Done"}
                    classPlus={"done"}
                    cardItems={done}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={2}
                />
              </div>
          </React.StrictMode>
          {showForm&&
              <Form
                    background={background}
                    setBackground={setBackground}
                    setShowForm={setShowForm}
                    newItem={newItem}
                    arraySetter={[setTodo,setDoing,setDone]}
            />}
      </div>
  );
}
export default App;
