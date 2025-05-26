import { useState, useEffect } from "react";
import style from "./changethemebtn.module.css";

const Themebtn = () => {
  const getInitialHue = () => {
    const root = getComputedStyle(document.documentElement);
    const currentHue = root.getPropertyValue('--hue').trim();
    return currentHue ? parseInt(currentHue) : 10;
  };

  const [hue, setHue] = useState(getInitialHue);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--hue', hue);
    root.style.setProperty('--color-primary', `hsl(${hue}, 100%, 53%)`);
    root.style.setProperty('--color-light', `hsl(${hue}, 100%, 63%)`);
    root.style.setProperty('--color-super-light', `hsl(${hue}, 100%, 73%)`);
    root.style.setProperty('--color-super-duper-light', `hsl(${hue}, 100%, 93%)`);
  }, [hue]);

  const changeTheme = () => {
    let newHue = hue + 10;
    if (newHue > 255) newHue = 10;
    setHue(newHue);
  };

  return (
    <div className={style.btndiv}>
      <button className={style.btnn} onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Themebtn;
