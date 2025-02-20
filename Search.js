// import React from "react";

// export default function Search({ categories, onSelectCategory }) {
//   return (
//     <div className="search-container">
//       <select onChange={(e) => onSelectCategory(e.target.value)}>
//         <option value="">All Categories</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Search({ categories, onSelectCategory, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
