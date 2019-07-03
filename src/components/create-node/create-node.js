import React, { Fragment } from 'react';
import './create-node.css';
import CreateNodeText from '../create-node-text';
import CreateNodeButton from '../create-node-button';

export default function CreateNode ({parentId, data, addItem, addLocalStorage}) {
   
        let items = data.filter(el => el.parent === parentId);
        let length = data.length;
        
        return (
                <ul className="container">
                
                {items.map((el, index) => {
                    return (
                        <Fragment key = {el.id}>
                        <li className={index === items.length-1 ? "end":"node"}>
                        
                        <CreateNodeButton 
                        addItem = {addItem} 
                        length={length}
                        parentId = {el.id}
                        addLocalStorage={addLocalStorage}
                        />
                        <CreateNodeText {...el} />
                        
                        <CreateNode
                         parentId = {el.id} 
                         data={data} 
                         addItem={addItem}
                         addLocalStorage={addLocalStorage}
                         /> 
                        </li>
                        </Fragment>
                    )
                })}
               </ul>
           
        )
    
}
