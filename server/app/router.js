// routes/symptomes.js
import { Router } from "express";
import { query as _query } from "../database/vitalitea_blend_db.sql";

const router = Router();

// Récupérer tous les symptômes
router.get("/symptomes", (req, res) => {
  const query = "SELECT * FROM symptomes";
  _query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

export default router;
