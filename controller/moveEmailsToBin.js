const Email = require("../model/email");

const moveEmailsToBin = async (request,response) => {
    try {
        await Email.updateMany({ _id: { $in: request.body } }, { $set: { bin: true, starred: false, type: '' } });
        return response.status(200).json('emails deleted successfully');
    } catch (error) {
         console.log(error);
         response.status(500).json(error.message);
        }
}

module.exports = moveEmailsToBin;