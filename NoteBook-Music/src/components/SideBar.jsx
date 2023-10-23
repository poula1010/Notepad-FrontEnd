/* eslint-disable react/prop-types */

export default function SideBar(props) {
    const noteHeads = props.notes.map((note) => {
        return (
            <div key={note.id} className={`note-header ${note.id === props.currentNoteId ? "active" : ""}`} onClick={() => props.updateId(note.id)}>Note {note.id}</div>
        )
    });
    return (
        <div className="split-left">
            <div className="app-title">My Notes</div>
            {noteHeads}
        </div>
    )

}