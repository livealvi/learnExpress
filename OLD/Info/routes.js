const router = require('express').Router();

const {
    getAllInfo,
    getSingleInfo,
    createInfo,
    updateSingleInfo,
    deleteSingleInfo
} = require('./controller');

router.get('/', getAllInfo);
router.get('/:id', getSingleInfo);
router.post('/', createInfo);
router.put('/:id', updateSingleInfo);
router.delete('/:id', deleteSingleInfo);

module.exports = router;