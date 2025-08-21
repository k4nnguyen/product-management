// Router for Admin Product page
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/products.controller");
router.get("/", controller.products);
router.patch("/change-status/:status/:id", controller.changeStatus);
// Với ?status, thì status là query
// Còn với /status, thì status là params
module.exports = router;
