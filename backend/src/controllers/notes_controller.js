import Note from "../models/note.js";

export async function get_all_notes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in get_all_notes controller ", error);
        res.status(500).json({ message: "Internal server error" })
    }
};

export async function get_note_by_id(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "Note not found" })
        res.json(note);
    } catch (error) {
        console.error("Error in get_notes_by_id controller ", error);
        res.status(500).json({ message: "Internal server error" })
    }

}

export async function create_note(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const saved_note = await note.save();
        res.status(201).json({ saved_note });
    } catch (error) {
        console.error("Error in create_note controller ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function update_note(req, res) {
    try {
        const { title, content } = req.body;
        const updated_note = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true, }
        )

        if (!updated_note) return res.status(404).json({ message: "Id not found" })

        res.status(200).json(updated_note);
    } catch (error) {
        console.error("Error in update_note controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function delete_note(req, res) {
    try {
        const deleted_note = await Note.findByIdAndDelete(req.params.id);
        if (!deleted_note) return res.status(404).json({ message: "Id not found" })
        res.status(200).json({ message: "Note Deleted" });


    } catch (error) {
        console.error("Error in delete_note controller", error);
        res.status(500).json({ message: "Internal server error" });

    }
};