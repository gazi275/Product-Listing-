import { useState } from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";


const Homepage = () => {
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className={ 'bg-white text-black' }>
            <Header></Header>
            <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         
        </div>

            
        </div>
        </div>
    );
};

export default Homepage;