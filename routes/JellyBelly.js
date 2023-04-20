var express = require('express');
const JellyBelly_controlers= require('../controllers/JellyBelly');
var router = express.Router();
/* GET JellyBelly */
router.get('/JellyBelly/:id', JellyBelly_controlers.JellyBelly_view_all_Page );
module.exports = router;
/* GET detail JellyBelly page */
router.get('/detail', JellyBelly_controlers.JellyBelly_view_one_Page);
/* GET create JellyBelly page */
router.get('/create', JellyBelly_controlers.JellyBelly_create_Page);
/* GET create update page */
router.get('/update', JellyBelly_controlers.JellyBelly_update_Page);

// * GET delete JellyBelly page */
router.get('/delete', JellyBelly_controlers.JellyBelly_delete_Page);