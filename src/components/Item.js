import React from "react";
import {MdDelete, MdModeEditOutline} from 'react-icons/md'

const Item = ({expense, handleDelete, handleEdit}) => {
    const {id, charge, amount} = expense
    return (
        <div className="item-container">
            <li className="item">
                <div className="info">
                    <span className="expense">{charge}</span>
                    <span className="amount">₦ {amount}</span>
                </div>
                <div className="modify-buttons">
                    <button 
                        className="edit-button" 
                        aria-label="edit button"
                        onClick={()=>handleEdit(id)}
                    >
                        <MdModeEditOutline />
                    </button>
                    <button 
                        className="delete-button" 
                        aria-label="delete button"
                        onClick={()=>handleDelete(id)}
                    >
                        <MdDelete />
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Item;