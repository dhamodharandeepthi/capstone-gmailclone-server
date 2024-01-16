
const Email = require('../model/email')

const deleteEmails = async (request,response) => {
    try {
        await Email.deleteMany({ _id: { $in: request.body } }); 
        return response.status(200).json('emails deleted successfully');
    } catch (error) {
             console.log(error);
             response.status(500).json(error.message);
        }
}

module.exports = deleteEmails