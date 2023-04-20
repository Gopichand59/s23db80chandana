var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var JellyBelly_controller = require('../controllers/JellyBelly');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// JellyBelly ROUTES ///
// POST request for creating a JellyBelly.
router.post('/JellyBelly', JellyBelly_controller.JellyBelly_create_post);
// DELETE request to delete JellyBelly.
router.delete('/JellyBelly/:id', JellyBelly_controller.JellyBelly_delete);
// PUT request to update JellyBelly.
router.put('/JellyBelly/:id', JellyBelly_controller.JellyBelly_update_put);
// GET request for one JellyBelly.
router.get('/JellyBelly/:id', JellyBelly_controller.JellyBelly_detail);
// GET request for list of all JellyBelly items.
router.get('/JellyBelly', JellyBelly_controller.JellyBelly_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"JellyBelly", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
