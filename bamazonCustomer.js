var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
let idArr = [];
let itemArr = [];
let priceArr = [];
let salesArr = [];
let quantityArr = [];


var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'bamazon_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected as id: ' + connection.threadId);
    allProducts();
});

function allProducts() {
    let query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        for (let i = 0; i < res.length; i++) {
            if (res[i].stock_quantity > 0) {
                idArr.push(res[i].item_id);
                itemArr.push(res[i].product_name);
                priceArr.push(res[i].price);
                quantityArr.push(res[i].stock_quantity);
                salesArr.push(res[i].product_sales);
            }
        }
        purchase();
    });
}

function purchase() {
    inquirer.prompt([{
            message: "What is the ID of the product you would like to buy or press Q to quit?",
            type: "input",
            name: "buyID"
        },
        {
            message: "How many units would you like to purchase?",
            type: "input",
            name: "buyUnits"

        }
    ]).then(function (answer) {


        for (let i = 0; i < idArr.length; i++) {
            if (answer.buyID == idArr[i]) {

                if (answer.buyUnits > quantityArr[i]) {
                    console.log('Insufficient quantity!');
                } else {

                    let newQuantity = quantityArr[i] - answer.buyUnits;
                    let prodSales = salesArr[i] + parseInt(answer.buyUnits)*priceArr[i]; 

                    console.log('these are the prod sales: ' +prodSales);

                    let query = connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [{
                                stock_quantity: newQuantity,
                                product_sales: prodSales
                            },
                            {
                                item_id: idArr[i]
                            },
                            
                        ],
                        function (err, res) {
                            if (err) throw err;
                        }
                    )

                    console.log('Thank you!  The total cost of your purchase was $' + (priceArr[i] * answer.buyUnits).toFixed(2));
                    purchase();
                }

            }
        }

    })

}