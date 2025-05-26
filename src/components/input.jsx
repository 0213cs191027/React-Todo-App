import { useContext, useState } from "react";
import styles from "./input.module.css";
import { Todocontext } from "../store";

const Input = () => {
  const totcontext = useContext(Todocontext);
  const additem = totcontext.additem;
  const [text, settext] = useState("");

  const handleadd = () => {
    if (text.trim() !== "") {
      additem(text);
      settext("");
    }
  };

  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        value={text}
        className={styles.myinput}
        placeholder="Add todo here..."
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleadd} className={styles.addbtn}>
        Add
      </button>
    </div>
  );
};

export default Input;
