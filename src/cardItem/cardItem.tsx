import React, {Dispatch, SetStateAction} from "react";
import './cardItem.modules.css';
import {cardItemItf} from '../interface/template';
export const CardItem : React.FC<{
    item:cardItemItf,
    setNewItem:Dispatch<SetStateAction<cardItemItf>>}> = (props) =>{
    let {item,setNewItem}=props;
    const {title,description}=item;
    return(
        <div className={"card__item"} onClick={(event)=>{
            setNewItem(item);
        }}>

            <h4>{title}</h4>

            <p>{description}</p>

        </div>
    )
};
