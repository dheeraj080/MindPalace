import express from "express"
import { delete_note, get_all_notes, update_note, create_note, get_note_by_id } from "../controllers/notes_controller.js";

const router = express.Router();

router.get("/", get_all_notes);
router.get("/:id", get_note_by_id);
router.post("/", create_note);
router.put("/:id", update_note);
router.delete("/:id", delete_note);

export default router;

