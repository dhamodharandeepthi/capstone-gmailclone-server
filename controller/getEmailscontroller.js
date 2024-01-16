const Email = require("../model/email");

const getEmails = async (request, response) => {
    try {
        let emails;
        if (request.params.type === 'bin') {
            emails = await Email.find({ bin: true })
        } else if (request.params.type === 'allmail') {
            emails = await Email.find({});
        } else if(request.params.type === 'starred'){
            emails = await Email.find({ starred: true, bin: false }) 
            }
         else{
            emails = await Email.find({ type: request.params.type });
        }
        return response.status(200).json(emails);
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
}

module.exports = getEmails
