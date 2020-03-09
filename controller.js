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
                co_title : 'Main Table',
                purchases: purchases
            }
        )
    });
}

exports.reverse = (req,res) => {
    Purchase.getAllPurchase(function(err, purchases) {
        if (err)
            res.send(err);

        Purchase.getAllItems(function(err, items) {
            if (err)
                res.send(err);

            reversed = {}

            for (purchase of purchases){
                if (purchase.full_name in reversed){
                    reversed[purchase.full_name]["items"][purchase.item] += purchase.quantity
                } else {
                    row = {
                        "email" : purchase.email,
                        "items" : {}
                    }
                    // row["items"][purchase.item] = purchase.quantity
                    for (item of items){
                        if (item.item == purchase.item) {
                            row["items"][item.item] = purchase.quantity    
                        } else {
                            row["items"][item.item] = 0
                        }
                    }
                    reversed[purchase.full_name] = row
                }
            }
            
            res.render('reversed',
                {
                    title:'Purchase',
                    message:'Purchases History Table',
                    purchases: purchases,
                    co_title : 'Reversed Table',
                    reversed : reversed,
                    items : items
                }
            )

        });
    });
}

