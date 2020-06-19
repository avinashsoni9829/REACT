/* 
render a product component for each product in a list using the array map method also pass a 
key prop to avoid the warning

*/

import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App()
{
    const productComponents=productsData.map( item => <Product key={item.id} product={item} /> )
    return(
        <div>
        {productComponents}
        </div>
    )
}   

