var express = require("express");
var router = express.Router();
const { isLogin } = require("../../middleware/auth");

const { findAll, findOne } = require("../../controller/index");

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get Data All Users
 *     responses:
 *       200:
 *         description: Returns a row data users.
 */
router.get("/", findAll);
router.get("/:id", findOne);
// router.post("/created", isLogin, create);
// router.put("/updated/:id", isLogin, update);
// router.delete("/deleted/:id", isLogin, remove);

module.exports = router;
