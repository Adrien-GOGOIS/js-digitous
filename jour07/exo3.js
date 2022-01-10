// 03 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

const shortNames = longNames.map(function(names) {
    return `name : ${names.firstName} ${names.lastName}`;
});

console.log(shortNames);