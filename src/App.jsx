import React from "react"
import ListFeature from "./components/ListFeature";
import ListingItem from "./components/ListingItem";
import ProfileCard from "./components/ProfileCard"
import ProgressBar from "./components/ProgressBar";
import RecipeCard from "./components/RecipeCard";
import ListFilter from "./components/ListFilter";
import ContentSection from "./components/ContentSection";
import AlertBox from "./components/AlertBox";
import DynamicButton from "./components/DynamicButton";
import UserListActive from "./components/UserListActive";

const App = () => {
	const userData = {
		name: "Alice Wonderland",
		email: "alice@example.com",
		avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW"
	  };

	  const productData = {
		id: 1,
		name: "Wireless Mouse",
		price: 25.99,
		inStock: true
	  };

	  const appFeatures = [
		"Real-time updates",
		"User authentication",
		"Data export",
		"Customizable themes"
	  ];

	  const pizzaRecipe = {
		name: "Homemade Pizza",
		ingredients: [
		  "Pizza dough",
		  "Tomato sauce",
		  "Mozzarella cheese",
		  "Pepperoni",
		  "Oregano"
		],
		instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
	  };

	  const inventoryItems = [
		{ id: 1, name: "Laptop", category: "Electronics" },
		{ id: 2, name: "Desk Chair", category: "Furniture" },
		{ id: 3, name: "Monitor", category: "Electronics" },
		{ id: 4, name: "Bookshelf", category: "Furniture" }
	  ];

	  const filterCatagory="Electronics"

	  const usersData = [
		{ id: 1, name: "Charlie", isOnline: true },
		{ id: 2, name: "Diana", isOnline: false },
		{ id: 3, name: "Eve", isOnline: true }
	];


	return (
		<>
		<ProfileCard 
			avatarUrl={userData.avatarUrl}
			name = {userData.name}
			email={userData.email} />

		<ListingItem product = {productData}/>
		<ListFeature list = {appFeatures}/>
		<div className="change">
		<ProgressBar percentage={75} />
		<ProgressBar percentage={60} />
		<RecipeCard recipe={pizzaRecipe}/>

		<AlertBox message="Operation Successfull!" type = "success"/>
		<AlertBox message="Be Carefull!" type = "warning"/>
		<AlertBox message="Something Went Wrong!" type = "error"/>

		<ListFilter items={inventoryItems}>
			<h3>List of Items:</h3>
		</ListFilter>
		<ListFilter items={inventoryItems} filterCatagory={filterCatagory} >
			<h3> {filterCatagory} </h3>
		</ListFilter>

		<ContentSection title="About Us">
  			<p>We are a company dedicated to...</p>
  			<img src="https://placehold.co/150x100" alt="About Us" />
		</ContentSection>

		<ContentSection title="Contact Info">
			<ul>
				<li>Email: info@example.com</li>
				<li>Phone: 123-456-7890</li>
			</ul>
		</ContentSection>

		<DynamicButton label="Submit Form" onClick={() => alert('Form Submitted!')} />
		<DynamicButton label="Disabled Button" isDisabled={true} />

		<UserListActive users={usersData}/>

		
		</div>
		</>
	)
}
export default App
