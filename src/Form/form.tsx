import React, {Dispatch, SetStateAction, useState} from "react";
import './form.modules.css';
import {cardItemItf, cardItemStatusEnm} from "../interface/template";

const Form : React.FC<{
    classPlus:string,
    setBackground:Dispatch<SetStateAction<string>>,
    setShowForm:Dispatch<SetStateAction<boolean>>,
    newItem:cardItemItf,
    arraySetter:Dispatch<SetStateAction<cardItemItf[]>>[],
    origin:cardItemStatusEnm,
    setOrigin:Dispatch<SetStateAction<cardItemStatusEnm>>
}> = (props) =>{

    const {arraySetter, classPlus,origin,setOrigin,setBackground, newItem, setShowForm} = props;
    const [setTodo,setDoing,setDone]=arraySetter;
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
                        className={classPlus+" form__item"}
                        onChange={(event)=> {
                        window.removeEventListener("click",click);
                        setBackground(event.target.value.toLowerCase());
                        setStatus(event.target.value as cardItemStatusEnm);
                    }}>
                        <option>{cardItemStatusEnm.TODO}</option>
                        <option>{cardItemStatusEnm.DOING}</option>
                        <option>{cardItemStatusEnm.DONE}</option>
                    </select>
                </span>

                <span className={"form__item"}>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        setShowForm(false);
                        const item:cardItemItf={
                            title:title,
                            description:desc,
                            status:status
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
                        switch (origin) {
                            case cardItemStatusEnm.TODO:
                                setTodo((prevState) => {
                                    prevState.splice(prevState.indexOf(item),1);
                                    return prevState;
                                })
                                break;
                            case cardItemStatusEnm.DOING:
                                setDoing((prevState)=> {
                                    prevState.splice(prevState.indexOf(item),1);
                                    return prevState;
                                })
                                break;
                            case cardItemStatusEnm.DONE:
                                setDone((prevState)=> {
                                    prevState.splice(prevState.indexOf(item),1);
                                    return prevState;
                                })
                                break;
                            default:
                                break;
                        }
                    }}>Add</button>
                    <button type={"reset"}>reset</button>
                </span>

            </form>
        </div>
    );
}
export default Form;