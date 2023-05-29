import React from "react";

const Form = ({
    charge, 
    amount, 
    handleCharge, 
    handleAmount, 
    handleSend,
    edit
    }) => {
    return (
        <form onSubmit={handleSend}>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="charge">expense: </label>
                    <input 
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="e.g. Rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount ($): </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="amount" 
                        name="amount" 
                        placeholder="e.g. 300"
                        value={amount}  
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="button add-button">
                {edit ? "Edit Item" : "Add Item"}
            </button>
        </form>
    )
}

export default Form;