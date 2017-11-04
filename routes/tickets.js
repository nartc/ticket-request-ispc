const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Ticket = require('../models/Ticket');

//Create Ticket
router.post('/add', (req, res) => {
  let newTicket = new Ticket({
    team: req.body.team,
    content: req.body.content
  });

  Ticket.createTicket(newTicket, (err, ticket) => {
    if(err) {
      return res.json({
        success: false,
        title: 'error',
        message: 'Error creating new ticket',
        error: err
      });
    }

    res.json({
      success: true,
      title: 'success',
      message: 'Ticket created',
      ticket: ticket
    });
  });
});

//Get Tickets
router.get('/', (req, res) => {
  Ticket.getTickets((err, tickets) => {
    if(err) {
      return res.json({
        success: false,
        title: 'error',
        message: 'Error fetching all tickets',
        error: err
      });
    }

    res.json({
      success: true,
      title: 'success',
      message: 'All tickets fetched',
      tickets: tickets
    });
  });
});

//GetProgress
router.get('/status', (req, res) => {
  let status = req.body.status;
  Ticket.getTicketsByProgress(status, (err, tickets) => {
    if(err) {
      return res.json({
        success: false,
        title: 'error',
        message: 'Error getting tickets by progress',
        error: err
      });
    }

    res.json({
      success: true,
      title: 'success',
      message: 'Tickets fetched',
      tickets: tickets
    });
  });
});

//Update Ticket
router.put('/ticket/:id', (req, res) => {
  Ticket.updateTicket(req.params.id, (err, ticket) => {
    if(err) {
      return res.json({
        success: false,
        title: 'error',
        message: 'Error updating ticket',
        error: err
      });
    }

    res.json({
      success: true,
      title: 'success',
      message: 'Ticket updated',
      ticket: ticket
    });
  });
});

module.exports = router;
