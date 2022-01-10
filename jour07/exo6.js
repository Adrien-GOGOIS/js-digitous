const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];


const soldOut = cakes.filter(function(item) {
    return item['flavor'] === 'chocolate';
}).map(function(available) {	
    return {...available, status : 'Sold out!'};
});

console.log(soldOut);

