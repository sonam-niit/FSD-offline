type Product = {
    id: number,
    name: string,
    price:number,
    category: string
}

const products: Product[] =[
    {id:1, name:"Laptop",price:89000,category:"Electronics"},
    {id:2, name:"Mobile",price:45000,category:"Electronics"},
    {id:3, name:"Shoes",price:4000,category:"Fashion"},
]
function ProductList() {
    return ( 
        <div>
            <h1>Product Table</h1>
            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default ProductList;