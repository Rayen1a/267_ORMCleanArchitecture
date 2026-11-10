const express = require('express');
const router = express.Router();
const KomikController = require('../controller/KomikController');       

router.get('/komik', KomikController.getAllKomik);
router.get('/komik/:id', KomikController.getKomikById);
router.post('/komik', KomikController.createKomik);
router.put('/komik/:id', KomikController.updateKomik);
router.delete('/komik/:id', KomikController.deleteKomik);

module.exports = router;