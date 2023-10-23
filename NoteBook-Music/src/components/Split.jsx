import { useState } from "react"

export default function Split() {
    const [splitMaximized, setSplitMaximized] = useState(true);
    function handleSplitMinimize() {
        setSplitMaximized(prev => !prev);
    }
    const splitBtnClass = splitMaximized === true ? "split-btn-max" : "split-btn-min";
    const splitClass = splitMaximized === true ? "split-maximized" : "split-minimized";
    return (
        <div className={"split-main " + splitClass}>
            <div className="split-left">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
            </div>
            <div className="split-right">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi tempore ut voluptatum quasi veritatis, magnam assumenda sed consectetur, facilis, aperiam possimus? Nemo, inventore? Mollitia labore quidem ipsum repellat delectus.   </p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
            </div>
            <button className={"split-min-btn " + splitBtnClass} onClick={handleSplitMinimize} ></button>
        </div>

    )
}