// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from dataController.js.
const data = require("../controllers/dataController.js");

router.post("/add", data.addController);
router.get("/get", data.getController);

// Exporting dataRoutes.js to server.js.
module.exports = router;
