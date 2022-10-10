import React, { useState, Fragment } from "react";

import data from "./mock-data.json"

import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import AddRow from "./components/AddRow";
import Main from "./components/Main";

import { searchTable } from "./code/searchtable";
import { goOnAddNew, goOnContacts, goOnMain } from "./code/togglepage";
 
const App = () => {

const [radnici, setRadnici] = useState(data)
const [editContactId, setEditContactId] = useState(null)

const [noviRadnik, setNoviRadnik] = useState(null)

const [editSelectedRadnik, setEditSelectedRadnik] = useState(null)

//dugme edit
const handleEdit = (e) => {
    const dataId = e.target.parentElement.parentElement.getAttribute("id")
    setEditContactId(dataId)
}
//dugme delete
const handleDelete = (e) => {
    const sviRadnici = [...radnici]
    const idRadnika = e.target.parentElement.parentElement.id
    if (window.confirm("Do you really want to delete?")) {
        sviRadnici.splice(idRadnika, 1)
        setRadnici(sviRadnici)
    }
 }
//dugme save - handleChangeSelectedRadnik je za menjanje setEditSelectedRadnik na onChange - handleSave je za menjanje radnici array onClick
 const handleChangeSelectedRadnik = (e) => {
     const editIme = document.querySelector("#editIme") 
     const editPrezime = document.querySelector("#editPrezime")
     const editAdresa = document.querySelector("#editAdresa")
     const editTelefon = document.querySelector("#editTelefon")
     const editEmail = document.querySelector("#editEmail")

     const editRB = e.target.parentElement.parentElement.id

     setEditSelectedRadnik({
        RedniBroj: editRB,
        Ime: editIme.value,
        Prezime: editPrezime.value,
        Adresa: editAdresa.value,
        Telefon: editTelefon.value,
        Email: editEmail.value,
    })
}

const handleSave = (e) => {
    const x = e.target.parentElement.parentElement.id
    const index = radnici.findIndex(object => {
        return object.RedniBroj=== x;
      });

    if(editSelectedRadnik == null){alert('Nothing is changed')}
    if(editSelectedRadnik !== null){
    radnici[index] = editSelectedRadnik
    setEditContactId(null)
    }
}

//dugme cancel
 const handleCancel = () => {
    setEditContactId(null)
}
//dugme add
const handleChangeNoviRadnik = () => {
    const addImeInput = document.querySelector("#addIme") 
    const addprezimeInput = document.querySelector("#addPrezime")
    const addadresaInput = document.querySelector("#addAdresa")
    const addtelefonInput = document.querySelector("#addTelefon")
    const addemailInput = document.querySelector("#addEmail")

    const noviRB = parseInt(radnici[radnici.length-1].RedniBroj) + 1

    setNoviRadnik({
        RedniBroj: noviRB.toString(),
        Ime: addImeInput.value,
        Prezime: addprezimeInput.value,
        Adresa: addadresaInput.value,
        Telefon: addtelefonInput.value,
        Email: addemailInput.value,
    })   
}

const handleAddTable = () => {
    if(noviRadnik == null){alert('You must enter some values')}
    if(noviRadnik !== null){
        radnici.push(noviRadnik)
        handleChangeNoviRadnik()
        goOnContacts()
    }
}

//dugme reset
const handleAddReset = () => {
    const addImeInput = document.querySelector("#addIme") 
    const addprezimeInput = document.querySelector("#addPrezime")
    const addadresaInput = document.querySelector("#addAdresa")
    const addtelefonInput = document.querySelector("#addTelefon")
    const addemailInput = document.querySelector("#addEmail")
    addImeInput.value = ''
    addprezimeInput.value = ''
    addadresaInput.value = '' 
    addtelefonInput.value = ''
    addemailInput.value = ''
    setNoviRadnik(null)
}

    return (
        <div>
            <div className="main">
                <Main goOnAddNew={goOnAddNew} goOnContacts={goOnContacts} />
            </div>

            <div className="tabela"  style={{display: "none"}}>
                <div className="main-parent">
                    <button className="main-btn" onClick={goOnMain}>Main Page</button>
                    <input id="search" className="search" onKeyUp={searchTable} placeholder="Search by name"></input>
                </div>               
                <table id="table">
                    <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th> 
                        <th><button id="add-new-contact" onClick={goOnAddNew}>Add new +++</button></th>  
                    </tr>
                    </thead>

                    <tbody>
                    {radnici.map((radnik, index)=>(
                    <Fragment>  
                        { index == editContactId ? 
                        (<EditableRow radnik={radnik} handleChangeSelectedRadnik={handleChangeSelectedRadnik} handleSave={handleSave} handleCancel={handleCancel} key={index}/>) : 
                        (<ReadOnlyRow radnik={radnik} index={index} handleEdit={handleEdit} handleDelete={handleDelete} key={index}/>)}                    
                    </Fragment>  
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="dodaj-radnika" style={{display: "none"}}>
                <span><button id="close-add-menu" onClick={goOnContacts}>X</button></span>
                <div><h1>Add new contact</h1></div> 
                <AddRow handleChangeNoviRadnik={handleChangeNoviRadnik} handleAddTable={handleAddTable} handleAddReset={handleAddReset}/>                    
            </div>

        </div>
    )
  
}

export default App