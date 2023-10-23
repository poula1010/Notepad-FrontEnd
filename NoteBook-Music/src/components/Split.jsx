import { useState } from "react"
import SideBar from "./SideBar";

export default function Split() {
    const [splitMaximized, setSplitMaximized] = useState(true);
    const [notes, setNotes] = useState([{ id: 0, body: "Hi" }, { id: 1, body: 'Hello' }]);
    const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || 0);
    const currentNote = findCurrentNote();
    console.log(currentNote);
    function findCurrentNote() {
        const currNoteArr = notes.filter(note => {
            return note.id === currentNoteId;
        })
        return currNoteArr[0];
    }
    function createNewNote() {
        const newNote = {
            id: notes.length + 1,
            body: ""
        };
        setNotes(prev => {
            return [...prev, newNote];
        });
        setCurrentNoteId(newNote.id);
    }
    function updateCurrentNoteId(id) {
        setCurrentNoteId(id);
    }

    function handleSplitMinimize() {
        setSplitMaximized(prev => !prev);
    }
    function handleNoteTextChange(e) {
        console.log("under Construction");
        console.log(e.target.value);
    }

    const splitBtnClass = splitMaximized === true ? "split-btn-max" : "split-btn-min";
    const splitClass = splitMaximized === true ? "split-maximized" : "split-minimized";
    return (
        <div className={"split-main " + splitClass}>
            <SideBar notes={notes} updateId={updateCurrentNoteId} currentNoteId={currentNoteId} />
            <div className="split-right">
                <textarea className="text-box" onChange={handleNoteTextChange} value={currentNote.body} ></textarea>
            </div>
            <button className={"split-min-btn " + splitBtnClass} onClick={handleSplitMinimize} ></button>
        </div>

    )
}