import React from "react";
import Item from './Item';

const List = ({expenses, handleDelete, handleEdit, clearItems}) => {
    return (
        <div>
            <ul className="list">
                {expenses.map((expense) => {
                    return ( 
                            <Item key={expense.id} 
                            expense={expense} 
                            handleDelete={handleDelete} 
                            handleEdit={handleEdit}
                        />)
                })}
            </ul>
            {expenses.length > 0 && (
                <button
                    className="button clear-button" 
                    onClick={clearItems}
                >
                    Clear Expenses
                </button>
            )}
        </div>
    )
}

export default List;