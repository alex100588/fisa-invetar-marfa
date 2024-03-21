const express = require('express')
const {creazaProduse, iaToataMarfa, iaUnSingurProdus, stergeMarfa, updateazaProdus} = require('../controllers/marfaController')


const router = express.Router()

router.get('/', iaToataMarfa)

router.get('/:id', iaUnSingurProdus)

router.post('/', creazaProduse)

router.delete('/:id', stergeMarfa)

router.patch('/:id', updateazaProdus)


module.exports = router
