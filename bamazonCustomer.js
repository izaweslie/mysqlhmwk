// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

//Create mysql connection
function connectDB(){
connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'Suntan07'
	database: 'bamazon'
});
};

//Connect to database
connection.connect(function(err){
	if (err) {throw err;}
	connection.query('SELECT * FROM products', function(err,res){
		//run listProducts function
		listProducts(res)
	});
});

function userSelection(table){
	inquirer.prompt([

		{
			type: 'input',
			name: 'item',
			message: 'Which item would you like to purchase? (Type ID and hit Enter)'
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like to purchase?'
		}
	]).then(function(answers){
		console.log(answers)
		checkOut(answers.item, answers.quantity, table);
	});
}


//Functions
function listProducts(table){
	console.log("product");
	//Loop through table array of objects
	for (var i = 0; i < table.length; i++){
		console.log(table[i].item_id, table[i].product_name, table[i].department_name, table[i].price, table[i].stock_quantity);
	}
	//Run userSelection function
	userSelection(table);
}
};
connectDB();
