import { Todocontext } from "../store"
import { useContext, useState } from "react"
import styles from "./liitems.module.css"
const Liitems = () => {
    const totcontext = useContext(Todocontext)
    if (totcontext.items == "") {
        return <h3 className={styles.subheadding}>Add some todo to Show</h3>
    }
    else {
        return (
            <ul className="list-group">
                {totcontext.items.map((item) => (
                    <li
                        key={item.id}
                        className={`list-group-item ${totcontext.doneitem.includes(item.id) ? styles.done : ""}`}>
                        {item.text}
                        <button onClick={() => totcontext.deleteitem(item.id)} className={`${styles.listbtn} btn btn-primary`}>Remove</button>
                        <button onClick={() => totcontext.handledone(item.id)} className={`${styles.listbtn} btn btn-primary`}>Done</button>
                    </li>
                ))}
            </ul>
        );
    };
}
export default Liitems