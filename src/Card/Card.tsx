import './card.modules.css';
import {cardItemItf, cardItemStatusEnm} from '../interface/template';
import {CardItem} from "../cardItem/cardItem";
import React, {Dispatch, SetStateAction} from "react";

const List : React.FC<{
    title:string,
    cardItems:cardItemItf[],
    setNewItem:Dispatch<SetStateAction<cardItemItf>>,
    classPlus:string,
    setShowForm:Dispatch<SetStateAction<boolean>>,
    id:number,
    setOrigin:Dispatch<SetStateAction<cardItemStatusEnm>>

}> = (props) =>{

    const {title,setNewItem,classPlus,setShowForm,id}=props;
    let {cardItems}=props;
    return(
        <div className={"card "+classPlus}>

            <h3 className={"card__title "}>{`${title} / ${cardItems.length}`}</h3>

            <ul>
                {
                    cardItems.map((item)=>(
                    <li key={`${item.title}-${item.status}`}>
                        <CardItem item={item} setNewItem={setNewItem} setShowForm={setShowForm}/>
                    </li>
                ))}
            <span className={"add__item"}>
                <label htmlFor={"button"+id}>+ Add item</label>
                <button
                    onClick={()=>setShowForm(true)}
                    id={"button"+id} className={"form__button"}
                >Add</button>
            </span>
            </ul>

        </div>

    )
};
export default List;