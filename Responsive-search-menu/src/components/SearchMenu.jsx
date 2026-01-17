import { useState } from "react";     // React is not needed in import anymore (React 17+)
import menuItems from "./items";


function SearchMenu() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);   // ← fixed: use the setter
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div>
      <h2>Search Menu</h2>
      <p>
        Start to type for a specific category inside the search bar to "filter" the
        search options.
      </p>
      <div className="row">
        <div className="left" >
          <h2>Menu</h2>
          <input
            type="text"
            id="mySearch"
            placeholder="search.."
            title="Type in a category"
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul id="myMenu">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
            {/* Optional: show message when no results */}
            {filteredItems.length === 0 && searchTerm && (
              <li style={{ color: "#666", padding: "12px" }}>
                No matching categories found
              </li>
            )}
          </ul>
          
        </div>
        <div className="right">
          <h2>Page Content</h2>
          <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
          <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
          <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
          <p>Some text..</p>
        </div>
      </div>
    </div>
  );
}

export default SearchMenu;