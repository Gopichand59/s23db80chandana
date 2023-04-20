var JellyBelly = require('../models/JellyBelly');
// List of all JellyBelly
/*exports.JellyBelly_list = function(req, res) {
res.send('NOT IMPLEMENTED: JellyBelly list');
};*/
//List of all JellyBelly
exports.JellyBelly_list = async function(req, res) {
try{
theJellyBelly = await JellyBelly.find();
res.send(theJellyBelly);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific JellyBelly.
/*exports.JellyBelly_detail = function(req, res) {
res.send('NOT IMPLEMENTED: JellyBelly detail: ' + req.params.id);
};*/
// for a specific JellyBelly.
exports.JellyBelly_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await JellyBelly.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle JellyBelly create on POST.
/*exports.JellyBelly_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: JellyBelly create POST');
};*/
// Handle JellyBelly create on POST.
exports.JellyBelly_create_post = async function(req, res) {
console.log(req.body)
let document = new JellyBelly();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"JellyBelly_type":"goat", "cost":12, "size":"large"}
document.JellyBelly = req.body.JellyBelly;
document.size = req.body.size;
document.cost = req.body.cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle JellyBelly delete form on DELETE.
// Handle JellyBelly delete on DELETE.
exports.JellyBelly_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await JellyBelly.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle JellyBelly update form on PUT.
/*exports.JellyBelly_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: JellyBelly update PUT' + req.params.id);
};*/
//Handle JellyBelly update form on PUT.
exports.JellyBelly_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await JellyBelly.findById( req.params.id)
// Do updates of properties
if(req.body.JellyBelly)
toUpdate.JellyBelly = req.body.JellyBelly;
if(req.body.size) toUpdate.size = req.body.size;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// VIEWS
// Handle a show all view
exports.JellyBelly_view_all_Page = async function(req, res) {
    try{
    theJellyBelly = await JellyBelly.find();
    res.render('JellyBelly', { title: 'JellyBelly Search Results', results: theJellyBelly });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.JellyBelly_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await JellyBelly.findById( req.query.id)
    res.render('JellyBellydetail',
    { title: 'JellyBelly Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a JellyBelly.
// No body, no in path parameter, no query.
// Does not need to be async
exports.JellyBelly_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('JellyBellycreate', { title: 'JellyBelly Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a JellyBelly.
// query provides the id
exports.JellyBelly_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await JellyBelly.findById(req.query.id)
    res.render('JellyBellyupdate', { title: 'JellyBelly Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.JellyBelly_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await JellyBelly.findById(req.query.id)
    res.render('JellyBellydelete', { title: 'JellyBelly Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    