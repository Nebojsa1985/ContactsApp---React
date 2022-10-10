//toggle pages
export const goOnAddNew = () => {
    document.querySelector('.tabela').style.display = 'none'
    document.querySelector('.main').style.display = 'none' 
    document.querySelector('.dodaj-radnika').style.display = 'block'    
}
export const goOnContacts = () => {   
    document.querySelector('.dodaj-radnika').style.display = 'none' 
    document.querySelector('.main').style.display = 'none' 
    document.querySelector('.tabela').style.display = 'block'  
}
export const goOnMain = () => {   
         document.querySelector('.dodaj-radnika').style.display = 'none' 
         document.querySelector('.main').style.display = 'flex' 
         document.querySelector('.tabela').style.display = 'none'  
}