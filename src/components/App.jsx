import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Failed to get listings")
      }
    }
    )
    .then(data => setListings(data))
    .catch(error => console.log(error.message))
  }, [])

  const addListing = newListing => 
    setListings(previousListings => 
      [...previousListings, newListing]);

  const updateListing = updatedListing => 
    setListings(previousListings => 
      previousListings.map(listing => 
        listing.id === updatedListing.id ? updatedListing : listing));

  const deleteListing = deletedListing =>
    setListings(previousListings => 
      previousListings.filter(listing => listing.id !== deletedListing.id));

  const displayedListings = listings.filter((listing) => 
    listing.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header search={search} onSearch={setSearch}/>
      <ListingForm addListing={addListing} />
      <ListingsContainer 
        listings={displayedListings} 
        updateListing={updateListing} 
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
