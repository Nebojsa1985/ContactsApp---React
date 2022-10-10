import React from 'react'

const ReadOnlyRow = ({ radnik, index, handleEdit, handleDelete }) => {
    return (   
    <tr id={index} data-id={radnik.RedniBroj}>
        <td>{radnik.Ime}</td>
        <td>{radnik.Prezime}</td>
        <td>{radnik.Adresa}</td>
        <td>{radnik.Telefon}</td>
        <td>{radnik.Email}</td>
        <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </td>
    </tr>
    ) 
}

export default ReadOnlyRow