import React, {Dispatch, SetStateAction, useState} from "react";
import './form.modules.css';
import {cardItemItf, cardItemStatusEnm} from "../interface/template";

const Form : React.FC<{
    setShowForm:Dispatch<SetStateAction<boolean>>,
    newItem:cardItemItf,
    arraySetter:Dispatch<SetStateAction<cardItemItf[]>>[],
    method:string
}> = (props) =>{

    const {arraySetter,newItem, setShowForm,method} = props;
    const [setTodo,setDoing,setDone]=arraySetter;
    const [origin,setOrigin]=useState<cardItemStatusEnm>(newItem.status);
    let click=()=>{
        window.removeEventListener("click",click);
        setShowForm(false);
    }
    let [title,setTitle]=useState<string>(newItem.title||"");
    let [desc,setDesc]=useState<string>(newItem.description||"");
    let [status,setStatus]=useState<cardItemStatusEnm>(newItem.status||cardItemStatusEnm.TODO);
    return (
        <div className={"container"} onMouseLeave={()=>{
            window.addEventListener("click",click)
        }} onMouseEnter={()=>window.removeEventListener("click",click)}
        >
            <form>
                <span className={"form__item"}>
                    <label htmlFor={"title"}>Title</label>
                    <input
                        type={"text"}
                        value={title}
                        id={"title"}
                        className={"form__item"}
                        onChange={(event)=>setTitle(event.target.value)}
                    />
                </span>

                <span className={"form__item"}>
                    <label htmlFor={"desc"}>Description</label>
                    <textarea
                        id={"desc"}
                        value={desc}
                        className={"form__item"}
                        onChange={(event)=>setDesc(event.target.value)}>
                    </textarea>
                </span>

                <span  className={"form__item"}>
                    <label htmlFor={"form__select"}>Status</label>
                    <select
                        id={"form__select"}
                        className={origin.toLowerCase()+" form__item"}
                        onChange={(event)=> {
                        window.removeEventListener("click",click);
                        setStatus(event.target.value as cardItemStatusEnm);
                        setOrigin(status);
                    }}>{
                        Object.values(cardItemStatusEnm).map((item)=>(
                            <option selected={item===origin}>{item}</option>
                        ))
                    }
                    </select>
                </span>
                <span>
                </span>
                <span className={"form__item"}>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        event.stopPropagation();
                        if(title.trim()===""||desc.trim()===""){
                            alert("do not leave input empty");
                        }
                        else{
                            setShowForm(false);
                            const item:cardItemItf={
                                title:title,
                                description:desc,
                                status:status
                            }
                            if(method==="update"){
                                switch (origin) {
                                    case cardItemStatusEnm.TODO:
                                        setTodo((prevState) => {
                                            let index=prevState.indexOf(newItem);
                                            prevState.splice(index,1);
                                            return prevState;
                                        })
                                        break;
                                    case cardItemStatusEnm.DOING:
                                        setDoing((prevState)=> {
                                            prevState.splice(prevState.indexOf(newItem),1);
                                            return prevState;
                                        })
                                        break;
                                    case cardItemStatusEnm.DONE:
                                        setDone((prevState)=> {
                                            prevState.splice(prevState.indexOf(newItem),1);
                                            return prevState;
                                        })
                                        break;
                                    default:
                                        break;
                                }
                            }

                            switch (status) {
                                case cardItemStatusEnm.TODO:
                                    setTodo((prevState) => [...prevState,item])
                                    break;
                                case cardItemStatusEnm.DOING:
                                    setDoing((prevState)=>[...prevState,item])
                                    break;
                                case cardItemStatusEnm.DONE:
                                    setDone((prevState)=>[...prevState,item])
                                    break;
                            }
                        }
                    }}>Add</button>
                    <button type={"reset"}>reset</button>
                </span>

            </form>
        </div>
    );
}
export default Form;