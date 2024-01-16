const Email = require("../model/email");

const saveSentEmails = (request, response) => {
  try {
    const email = new Email(request.body);
    email.save();

    response.status(200).json("email saved succesfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

module.exports = saveSentEmails;
