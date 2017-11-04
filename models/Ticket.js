const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  team: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  resolved: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  resolvedOn: {
    type: Date
  }
});

const Ticket = module.exports = mongoose.model('Ticket', TicketSchema);

module.exports.createTicket = (newTicket, callback) => {
  newTicket.save(callback);
}

module.exports.getTickets = (callback) => {
  Ticket.find()
    .select('-__v')
    .exec(callback);
}

module.exports.getTicketsByProgress = (status, callback) => {
  let query = {resolved: status};
  Ticket.find(query)
    .select('-__v')
    .exec(callback);
}

module.exports.updateTicket = (id, callback) => {
  Ticket.findByIdAndUpdate(id, {$set: {resolved: true, resolvedOn: Date.now()}}, {new: true})
    .exec(callback);
}