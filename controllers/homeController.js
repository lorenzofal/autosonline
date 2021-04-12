const autos = require('../data/')
module.exports = {
    index: (req, res)=>{
        return res.render('index.ejs', {title: 'Pagina de Inicio', autos})
    }
}