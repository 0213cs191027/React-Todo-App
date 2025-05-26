import { createContext } from "react"
import { useState } from 'react'

export const Todocontext = createContext([])

const Todocontextprovider = ({ children }) => {

    const [items, setitems] = useState([])
    const [doneitem, setdoneitem] = useState([])
    
    const additem = (textt) => {
        const lastid = items.length + 1
        const newitem = { id: lastid, text: textt }
        setitems([...items, newitem])
    }
    const deleteitem = (itemtodelete) => {
        console.log(itemtodelete)
        setitems(items.filter((item) => item.id != itemtodelete))
    }
    const handledone = (index) => {
        if (!doneitem.includes(index)) {
            setdoneitem([...doneitem, index])
        } else {
            setdoneitem(doneitem.filter((i) => i !== index))
        }
    }
    return <Todocontext.Provider value={
        {
            additem,
            deleteitem,
            handledone,
            items,
            doneitem
        }
    }>
        {children}
    </Todocontext.Provider>
}
export default Todocontextprovider

