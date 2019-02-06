var express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

const port = 8080;

const data = [
	{
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Cooking Gear",
    "product": "TrailChef Deluxe Cook Set",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 59628.66,
    "quantity": 489,
    "grossMargin": 0.34754797,
    "id": 10
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Cooking Gear",
    "product": "TrailChef Double Flame",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 35950.32,
    "quantity": 252,
    "grossMargin": 0.4742745,
    "id": 11
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Tents",
    "product": "Star Dome",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 89940.48,
    "quantity": 147,
    "grossMargin": 0.35277197,
    "id": 12
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Tents",
    "product": "Star Gazer 2",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 165883.41,
    "quantity": 303,
    "grossMargin": 0.28293788,
    "id": 13
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Sleeping Bags",
    "product": "Hibernator Lite",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 119822.2,
    "quantity": 1415,
    "grossMargin": 0.29145017,
    "id": 14
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Sleeping Bags",
    "product": "Hibernator Extreme",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 87728.96,
    "quantity": 352,
    "grossMargin": 0.39814629,
    "id": 15
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Sleeping Bags",
    "product": "Hibernator Camp Cot",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 41837.46,
    "quantity": 426,
    "grossMargin": 0.33560737,
    "id": 16
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Lanterns",
    "product": "Firefly Lite",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 8268.41,
    "quantity": 577,
    "grossMargin": 0.52896022,
    "id": 17
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Lanterns",
    "product": "Firefly Extreme",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 9393.3,
    "quantity": 189,
    "grossMargin": 0.43420523,
    "id": 18
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Lanterns",
    "product": "EverGlow Single",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 19396.5,
    "quantity": 579,
    "grossMargin": 0.46149254,
    "id": 19
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Camping Equipment",
    "productType": "Lanterns",
    "product": "EverGlow Butane",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 6940.03,
    "quantity": 109,
    "grossMargin": 0.36186587,
    "id": 20
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Rope",
    "product": "Husky Rope 50",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 20003.2,
    "quantity": 133,
    "grossMargin": 0.32905585,
    "id": 21
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Rope",
    "product": "Husky Rope 60",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 14109.4,
    "quantity": 79,
    "grossMargin": 0.29165733,
    "id": 22
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Rope",
    "product": "Husky Rope 100",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 73970.22,
    "quantity": 227,
    "grossMargin": 0.30126435,
    "id": 23
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Rope",
    "product": "Husky Rope 200",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 77288.64,
    "quantity": 143,
    "grossMargin": 0.31477575,
    "id": 24
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Safety",
    "product": "Granite Climbing Helmet",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 62464.88,
    "quantity": 898,
    "grossMargin": 0.24468085,
    "id": 25
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Safety",
    "product": "Husky Harness",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 34154.9,
    "quantity": 559,
    "grossMargin": 0.28363339,
    "id": 26
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Safety",
    "product": "Husky Harness Extreme",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 36396.8,
    "quantity": 352,
    "grossMargin": 0.47843327,
    "id": 27
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Safety",
    "product": "Granite Signal Mirror",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 4074.84,
    "quantity": 126,
    "grossMargin": 0.51422387,
    "id": 28
  },
  {
    "retailerCountry": "United States",
    "orderMethodType": "Fax",
    "retailerType": "Outdoors Shop",
    "productLine": "Mountaineering Equipment",
    "productType": "Climbing Accessories",
    "product": "Granite Carabiner",
    "year": 2012,
    "quarter": "Q1 2012",
    "revenue": 15122.72,
    "quantity": 4022,
    "grossMargin": 0.4787234,
    "id": 29
  }
];

app.get('/data', function (req, res) {
  const { filter } = req.query;

  if (typeof filter !== "undefined") {
  	console.log('filter ', filter);
  	const filterVal = String(filter).toLowerCase();
  	res.status(200).json(data.filter((item) => {
  		const srcVal = String(item.productType).toLowerCase();
  		return srcVal.includes(filterVal);
  	}));
  	return;
  }

  res.status(200).json(data);
});

app.listen(port, () => console.log(`Service running on  http://localhost:${port}`));
