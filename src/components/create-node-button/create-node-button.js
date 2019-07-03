import React from 'react';
import './create-node-button.css';

export default function CreateNodeButton ({addItem, parentId, length, addLocalStorage}){
   
    return (
        <div className="expand"
            onClick = {()=>{
                addItem(length+1, parentId);
                addLocalStorage();
            }}
            ></div>
    )
}