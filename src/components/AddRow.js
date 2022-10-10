import React from 'react'

const AddRow = ({ handleChangeNoviRadnik, handleAddReset, handleAddTable }) => {
    return (   
        <div className='add-new-menu'>
        <input id="addIme" type="text" placeholder="Enter first name..." onChange={handleChangeNoviRadnik}></input>
        <input id="addPrezime" type="text" placeholder="Enter last name..." onChange={handleChangeNoviRadnik}></input>
        <input id="addAdresa" type="text" placeholder="Enter address..." onChange={handleChangeNoviRadnik}></input>
        <input id="addTelefon" type="text" placeholder="Enter phone..." onChange={handleChangeNoviRadnik}></input>
        <input id="addEmail" type="text" placeholder="Enter email..." onChange={handleChangeNoviRadnik}></input>
        <button onClick={handleAddTable}>Add</button>
        <button onClick={handleAddReset}>Reset</button>             
        </div> 
    ) 
}

export default AddRow