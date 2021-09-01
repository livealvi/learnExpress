const {
    json
} = require('express');
const AllUsersInfo = require('./AllUser');
const UsersInfo = require('./AllUser');

exports.getAllInfo = (req, res) => {
    UsersInfo.find()
        .then(infos => {
            res.json(infos)
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        });
};

exports.createInfo = (req, res) => {
    let {
        name,
        dept,
        user_id,
        addr1,
        addr2,
        phone
    } = req.body;
    let info = new UsersInfo({
        name,
        dept,
        user_id,
        addr1,
        addr2,
        phone
    });
    info.save()
        .then(info => {
            res.json(info);
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        })
};

exports.getSingleInfo = (req, res) => {
    let {
        id
    } = req.params;
    UsersInfo.findById(id)
        .then(info => {
            res.json(info);
        }).catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occurred'
            });
        });
};

exports.updateSingleInfo = (req, res) => {
    let {
        name,
        dept,
        user_id,
        addr1,
        addr2,
        phone
    } = req.body;
    let {
        id
    } = req.params;
    UsersInfo.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name,
            dept,
            user_id,
            addr1,
            addr2,
            phone
        }
    }, {
        new: true
    }).then(info => {
        res.json(info);
    }).catch(err => {
        console.log(err);
        res.json({
            message: 'Error Occurred'
        });
    });
};

exports.deleteSingleInfo = (req, res) => {
    let {
        id
    } = req.params;
    UsersInfo.findOneAndDelete({
        _id: id
    }).then(info => {
        res.json(info);
    }).catch(err => {
        console.log(err);
        res.json({
            message: 'Error Occurred'
        });
    });
};