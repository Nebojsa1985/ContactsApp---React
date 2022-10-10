import React from 'react'

const Main = ({ goOnAddNew, goOnContacts }) => {
    return (   
        <div className="main-page">
            <div className="main-page-contacts" onClick={goOnContacts}>Contacts</div>
            <div className="main-page-add" onClick={goOnAddNew}>Add new contact</div>
        </div>
    ) 
}

export default Main