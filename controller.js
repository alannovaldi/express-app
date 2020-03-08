var Purchase = require('./models/purchase.model.js');
let fs = require('fs');

exports.index = (req,res) => {
    Purchase.getAllPurchase(function(err, purchases) {
        if (err)
            res.send(err);
        
        res.render('index',
            {
                title:'Purchase',
                message:'Purchases History Table',
                purchases: purchases
            }
        )
    });
}

