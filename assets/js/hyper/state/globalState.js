var companyInfo = {
	title: 'Italian Bistro',
	phone: '(323) 530-9812',
	location: 'Los Angeles, CA'
};

var specialMenuData = [
	{
		img:
			'https://image.freepik.com/free-photo/penne-pasta-with-meatballs-tomato-sauce-white-bowl_2829-7663.jpg',
		title: 'Penne and Meatballs',
		description:
			'Italian styled meatballs in our homemade marinara sauce. Comes with a side salad and our finger licking garlic knot',
		price: 15
	},
	{
		img:
			'https://image.freepik.com/free-photo/fettuccine-italion-food-style_74190-3958.jpg',
		title: 'Seafood Alfredo',
		description:
			'Fettuccine in a creamy parmesan sauce, topped with sauteed garlic shrimp. Comes with a side of roasted veggies',
		price: 26
	},
	{
		img:
			'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		title: 'Signature Pizza',
		description:
			'Hand Tossed featuring our classic glutten free dough, and Oven Roasted, your choice of 3 toppings. Available in Medium and Large',
		price: 18
	}
];

var reviewsData = [
	{
		company: 'The Food Network',
		author: 'Jonas Smith',
		authorInfo: 'Author',
		highlight: 'Best Restaurant in the Town',
		review:
			'Food is always delicious and ambiance is better than most restaurants. Have eaten here numerous times for over a decade. I have taken clients here along with friends and family. I look forward to the next time I dine here.'
	},
	{
		company: 'VegNews',
		author: 'Terry Reed',
		authorInfo: 'Food Blogger',
		highlight: 'Excellent Authentic Italian Food',
		review:
			'Excellent food, interesting wine list with friendly owners. We were there with a couple friends so tasted a lot of the menu. Mushroom pasta was really tasty. We are anxious to go back, too many good choices.'
	},
	{
		company: 'Masala Garden',
		author: 'Samantha Hall',
		authorInfo: 'Winner Of Master Chef',
		highlight: 'Amazing Service and Food',
		review:
			'The owners are super attentive and the staff is gracious and on key.  We were taken care of in every way and not to mention the food was amazing ! '
	}
];
var randomQuoteData = [
	{
		author: 'Julia Child',
		quote: 'Always Start Out With A Larger Pot Than What You Think You Need.'
	},
	{
		author: 'Oscar Wilde',
		quote:
			"After a good dinner one can forgive anybody, even one's own relations."
	},
	{
		author: 'George Bernard',
		quote: 'There is no love sincerer than the love of food.'
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 0
	}
};
