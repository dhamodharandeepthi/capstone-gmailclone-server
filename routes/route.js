const express = require('express');
const saveSentEmails = require('../controller/email-controller');
const getEmails = require('../controller/getEmailscontroller');
const moveEmailsToBin = require('../controller/moveEmailsToBin');
const toggleStarredEmail = require('../controller/toggleStarredEmail');
const deleteEmails = require('../controller/deleteEmails');

const routes = express.Router();




routes.post("/save", saveSentEmails);
routes.get('/emails/:type', getEmails);
routes.post('/save-draft', saveSentEmails);
routes.post('/bin', moveEmailsToBin);
routes.post("/starred", toggleStarredEmail);
routes.delete('/delete', deleteEmails);





module.exports = routes;