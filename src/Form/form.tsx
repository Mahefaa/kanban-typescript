import React, {Dispatch, SetStateAction, useState} from "react";
import './form.modules.css';
import {cardItemItf, cardItemStatusEnm} from "../interface/template";

const Form : React.FC<{
    classPlus:string,
    setBackground:Dispatch<SetStateAction<string>>,
    setShowForm:Dispatch<SetStateAction<boolean>>,
    setNewItem:Dispatch<SetStateAction<cardItemItf>>,
    setTodo:Dispatch<SetStateAction<cardItemItf[]>>,
    array:cardItemItf[][]
}> = (props) =>{

    const {classPlus, setBackground,setShowForm,setTodo} = props;
    let click=()=>{
        window.removeEventListener("click",click);
        setShowForm(false);
    }
    let [title,setTitle]=useState<string>("");
    let [desc,setDesc]=useState<string>("");
    let [status,setStatus]=useState<cardItemStatusEnm>(cardItemStatusEnm.TODO);
    return (
        <div className={"container"} onMouseLeave={()=>{
            window.addEventListener("click",click)
        }} onMouseEnter={()=>window.removeEventListener("click",click)}
        >
            <form>
                <span className={"form__item"}>
                    <label htmlFor={"title"}>Title</label>
                    <input type={"text"} id={"title"} className={"form__item"} onChange={(event)=>setTitle(event.target.value)}/>
                </span>

                <span className={"form__item"}>
                    <label htmlFor={"desc"}>Description</label>
                    <textarea id={"desc"} className={"form__item"} onChange={(event)=>setDesc(event.target.value)}></textarea>
                </span>

                <span  className={"form__item"}>
                    <label htmlFor={"form__select"}>Status</label>
                    <select id={"form__select"} className={classPlus+" form__item"} onChange={(event)=> {
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
                    <button onClick={()=>{
                        setTodo([]);
                    }}>Add</button>
                    <button type={"reset"}>reset</button>
                </span>
            </form>
        </div>
    );
}
export default Form;