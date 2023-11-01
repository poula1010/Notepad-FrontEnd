import { useEffect, useState } from "react"
import SideBar from "./SideBar";
import { addNote, getNotes, updateNote } from "../services/NoteService";

export default function Split() {
    const [splitMaximized, setSplitMaximized] = useState(true);
    const [notes, setNotes] = useState([]);
    const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || 0);
    const currentNote = findCurrentNote();
    useEffect(() => {
        let newNotes;
        getNotes().then(resolved => {
            newNotes = resolved.data;
            setNotes(newNotes);
            if (newNotes.length > 0) {
                setCurrentNoteId(newNotes[0].id);
            }
        }).catch(() => { console.log("error") })

    }, [])
    function findCurrentNote() {
        const currNoteArr = notes.filter(note => {
            return note.id === currentNoteId;
        })
        return currNoteArr[0];
    }
    function createNewNote() {
        let newNote;
        addNote().then(resolved => {
            newNote = resolved.data;
            setNotes(prev => {
                return [...prev, newNote];
            });
            setCurrentNoteId(newNote.id);
        })

    }
    function updateCurrentNoteId(id) {
        setCurrentNoteId(id);
    }

    function handleSplitMinimize() {
        setSplitMaximized(prev => !prev);
    }
    function handleNoteTextChange(e) {
        setNotes((prev) => {
            const newNotes = prev.map(note => {
                if (note.id === currentNoteId) {
                    return { ...note, body: e.target.value };

                }
                else {
                    return note;
                }
            })
            return newNotes;
        })
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            updateNote(currentNote)
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [currentNote])
    const splitBtnClass = splitMaximized === true ? "split-btn-max" : "split-btn-min";
    const splitClass = splitMaximized === true ? "split-maximized" : "split-minimized";
    return (
        notes.length > 0 ?
            <div className={"split-main " + splitClass}>
                <SideBar
                    notes={notes}
                    updateId={updateCurrentNoteId}
                    currentNoteId={currentNoteId}
                    createNote={createNewNote}
                />
                <div className="split-right">
                    <textarea className="text-box" onChange={handleNoteTextChange} value={currentNote.body} ></textarea>
                </div>
                <button className={"split-min-btn " + splitBtnClass} onClick={handleSplitMinimize} ></button>
            </div>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button
                    className="first-note"
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
    )
}