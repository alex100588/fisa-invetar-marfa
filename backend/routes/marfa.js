const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({mssg: 'Afiseaza toata marfa'})
})

router.get('/:id', (req, res) =>{
    res.json({mssg: 'Afiseaza una singura'})
})

router.post('/', (req, res)=>{
    res.json({mssg: 'Afiseaza'})
})

router.delete('/:id',(req,res)=>{
    res.json({mssg: 'Sterge marfa'})
})

router.patch('/:id', (req, res)=>{
    res.json({mssg: 'Editeaza marfa'})
})


module.exports = router