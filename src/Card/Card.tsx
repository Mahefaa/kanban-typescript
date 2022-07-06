import './card.modules.css';
import {cardItemItf, cardItemStatusEnm} from '../interface/template';
import {CardItem} from "../cardItem/cardItem";
import React, {Dispatch, SetStateAction} from "react";

const Card : React.FC<{
    title:string,
    cardItems:cardItemItf[],
    setNewItem:Dispatch<SetStateAction<cardItemItf>>,
    status:cardItemStatusEnm,
    setShowForm:Dispatch<SetStateAction<boolean>>,
    id:number,
    setMethod:Dispatch<SetStateAction<string>>

}> = (props) =>{

    const {title,setNewItem,status,setShowForm,id,setMethod}=props;
    let {cardItems}=props;
    return(
        <div className={"card "+status.toLowerCase()}>
            <h3 className={"card__title "}>{`${title} / ${cardItems.length} task(s)`}</h3>
            <div className={"card__body"}>
                <ul>
                    {
                        (cardItems||[{} as cardItemItf]).map((item,index)=>(
                        <li key={`${item.title}-${item.description}`}>
                            <CardItem item={item} setNewItem={setNewItem} setShowForm={setShowForm} setMethod={setMethod}/>
                        </li>
                    ))}
                </ul>
                <div className={"add__item"} onClick={()=> {
                    setNewItem({
                        title:"",
                        description:"",
                        status:status
                    })
                    setMethod("add");
                    setShowForm(true);
                }}>
                    <label htmlFor={"button"+id}>+ Add item</label>
                    <button
                        id={"button"+id} className={"form__button"}
                    >Add</button>
                </div>
            </div>
        </div>

    )
};
export default Card;