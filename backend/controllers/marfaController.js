const Marfa = require('../models/marfaModel')
const mongoose = require('mongoose')

// afiseaza toata marfa
const iaToataMarfa = async(req, res) =>{
    const marfa = await Marfa.find({}).sort({createaAt: -1})

    res.status(200).json(marfa)
}

// ia un singur produs
const iaUnSingurProdus = async (req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Nu exista acest produs'})
    }

    const produs = await Marfa.findById(id)

    if(!produs){
        return res.status(404).json({error: "Nu exista acest produs"})
    }
    res.status(200).json(produs)
}

// creaza produse
const creazaProduse =async(req, res)=>{
    const {intense, delicate, intenso, espresso, selezione, zahar, lacta, nesquick, nestea, treiin1, irish, p218, p280, p218bonka, p280bonka, cp280, 
        pextraGrande, paletineExtrGrPlastic, paletine, zaharPlic, pahare8OZ, paletineIndividuale} = req.body
        // adauga marfa in baza de date
        try {
            const marfa = await Marfa.create({intense, delicate, intenso, espresso, selezione, zahar, lacta, nesquick, nestea, treiin1, irish, p218, p280, p218bonka, p280bonka, cp280, 
            pextraGrande, paletineExtrGrPlastic, paletine, zaharPlic, pahare8OZ, paletineIndividuale})
            res.status(200).json(marfa)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

// sterge
const stergeMarfa = async (req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Nu exista acest produs'})
    }

    const produs = await Marfa.findOneAndDelete({_id: id})

    if(!produs){
        return res.status(404).json({error: "Nu exista acest produs"})
    }
    res.status(200).json(produs)
   
}

// updateaza
const updateazaProdus = async (req, res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Nu exista acest produs'})
    }

    const marfa = await Marfa.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!marfa){
        return res.status(404).json({error: "Nu exista acest produs"})
    }
    res.status(200).json(marfa)
}

module.exports = {
    creazaProduse,
    iaToataMarfa,
    iaUnSingurProdus,
    stergeMarfa, 
    updateazaProdus
}