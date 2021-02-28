const {
    json
} = require('express');
const Contact = require('./Contact');

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts);
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        });
};

exports.createContact = (req, res) => {
    let {
        name,
        phone,
        email
    } = req.body;
    let contact = new Contact({
        name,
        phone,
        email
    });
    contact.save()
        .then(contact => {
            res.json(contact);
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        });

};

exports.getSingleContact = (req, res) => {
    let {
        id
    } = req.params;
    Contact.findById(id)
        .then(contact => {
            res.json(contact);
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        });
};

exports.updateContact = (req, res) => {
    let {
        name,
        email,
        phone
    } = req.body;
    let {
        id
    } = req.params;
    Contact.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name,
            email,
            phone
        }
    }, {
        new: true
    }).then(contact => {
        res.json(contact);
    }).catch(err => {
        console.log(err);
        res.json({
            message: 'Error Occurred'
        });
    });
};

exports.deleteContact = (req, res) => {
    let {
        id
    } = req.params;
    Contact.findOneAndDelete({
        _id: id
    }).then(contact => {
        res.json(contact);
    }).catch(err => {
        console.log(err);
        res.json({
            message: 'Error Occurred'
        });
    });
};