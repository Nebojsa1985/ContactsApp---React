import React from 'react'

const EditableRow = ({ radnik, handleChangeSelectedRadnik, handleSave, handleCancel }) => {
    return (   
    <tr id={radnik.RedniBroj}>
        <td><input id="editIme" type="text" placeholder="Enter first name..." defaultValue={radnik.Ime} onChange={handleChangeSelectedRadnik}></input></td>
        <td><input id="editPrezime" type="text" placeholder="Enter last name..." defaultValue={radnik.Prezime}  onChange={handleChangeSelectedRadnik}></input></td>
        <td><input id="editAdresa" type="text" placeholder="Enter adress..." defaultValue={radnik.Adresa}  onChange={handleChangeSelectedRadnik}></input></td>
        <td><input id="editTelefon" type="text" placeholder="Enter phone..." defaultValue={radnik.Telefon}  onChange={handleChangeSelectedRadnik}></input></td>
        <td><input id="editEmail" type="text" placeholder="Enter email..." defaultValue={radnik.Email}  onChange={handleChangeSelectedRadnik}></input></td>
        <td>
            <button onClick={handleSave}>Save</button>
            <button  onClick={handleCancel}>Cancel</button>
        </td>
    </tr>
    ) 
}

export default EditableRow