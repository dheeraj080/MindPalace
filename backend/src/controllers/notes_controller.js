export function get_all_notes (req, res)  {
    res.status(200).send("You have 5 the notes");
};

export function create_note (req, res)  {
    res.status(201).json({message: "Note Created"});
};

export function update_note (req, res)  {
    res.status(200).json({message: "Note Updated"});
};

export function delete_note  (req, res)  {
    res.status(200).json({message: "Note Deleted"});
};