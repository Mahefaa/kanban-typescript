import React, {Dispatch, SetStateAction, useState} from "react";
import './cardItem.modules.css';
import {cardItemItf} from '../interface/template';
export const CardItem : React.FC<{
    item:cardItemItf,
    setNewItem:Dispatch<SetStateAction<cardItemItf>>,
    setShowForm:Dispatch<SetStateAction<boolean>>,
}> = (props) =>{
    let {item,setNewItem,setShowForm}=props;
    let {title,description,status}=item;
    const [inputMode,setInputMode]=useState<boolean>(false);
    let setTitle: (arg0: string) => void,setDesc: (arg0: string) => void;
    [title,setTitle]=useState<string>(title);
    [description,setDesc]=useState<string>(description);
    return(
        <div className={"card__item"}>
            {
                inputMode ?
                    <>
                        <label htmlFor={"title"}><h4>Title</h4></label>
                        <input type={"text"} id={"title"} value={title} onChange={(event)=>setTitle(event.target.value)}/>
                        <label htmlFor={"description"}>Description</label>
                        <textarea value={description} onChange={(event)=>setDesc(event.target.value)} id={"description"}/>
                    </>
                    :
                    <>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </>
            }
            <span onClick={()=>{
                item={
                    title:title,
                    description:description,
                    status:status,
                }
                setNewItem(item);
                setShowForm(true);
            }}>
                <label htmlFor={"status"}>Status : </label>
                <input type={"button"} value={status} id={"status"} className={status?.toLowerCase()}/>
            </span>

            <span onClick={()=>setInputMode((prevState)=>!prevState)}>
                <input type={"button"} value={inputMode?"validate":"change"}/>
            </span>
        </div>
    )
};
