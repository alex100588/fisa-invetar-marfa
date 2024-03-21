const mongoose = require('mongoose')

const Schema = mongoose.Schema

const marfaSchema = new Schema({
    intense: {
        type: Number,
        required: true
    },
    delicate: {
        type: Number,
        required: true
    },
    intenso: {
        type: Number,
        required: true
    },
    espresso: {
        type: Number,
        required: true
    },
    selezione: {
        type: Number,
        required: true
    },
    zahar: {
        type: Number,
        required: true
    },
    lacta: {
        type: Number,
        required: true
    },
    nesquick: {
        type: Number,
        required: true
    },
    nestea: {
        type: Number,
        required: true
    },
    treiin1: {
        type: Number,
        required: true
    },
    irish: {
        type: Number,
        required: true
    },
    p218: {
        type: Number,
        required: true
    },
    p280: {
        type: Number,
        required: true
    },
    p218bonka: {
        type: Number,
        // required: true
    },
    p280bonka: {
        type: Number,
        // required: true
    },
    cp280: {
        type: Number,
        // required: true
    },
    pextraGrande: {
        type: Number,
        // required: true
    },
    paletineExtrGrPlastic: {
        type: Number,
        // required: true
    },
    paletine: {
        type: Number,
        // required: true
    },
    zaharPlic: {
        type: Number,
        // required: true
    },
    pahare8OZ: {
        type: Number,
        // required: true
    },
    paletineIndividuale: {
        type: Number,
        // required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Marfa', marfaSchema)