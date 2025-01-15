import React, { useState } from 'react' 
 
function Search({ products }) { 
    const [query, setQuery] = useState(''); 
 
    const handleSearch = () =
            product.name.toLowerCase().includes(query.toLowerCase()) 
        ); 
    }; 
 
    return ( 
                type="text" 
                value={query} 
                onChange={e =
                placeholder="Search for products..." 
                {handleSearch().map(product =
                ))} 
    ); 
} 
 
export default Search; 
