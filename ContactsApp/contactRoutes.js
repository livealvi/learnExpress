const router = require('express').Router();

const {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deletedContact
} = require('./contactContoller');

router.get('/', getAllContacts);
router.post('/', createContact);
router.get('/:id', getContactById);
router.put('/:id', updateContact);
router.delete('/:id', deletedContact);

module.exports = router;