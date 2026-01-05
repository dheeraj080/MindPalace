import express from "express"
import { delete_note, get_all_notes, update_note, create_note } from "../controllers/notes_controller.js";

const router = express.Router();

router.get("/", get_all_notes );
router.get("/", create_note );
router.get("/:id", update_note );
router.get("/:id", delete_note );
 
export default router; 

