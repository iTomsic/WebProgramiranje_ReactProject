export default function ProductList() {

    const products = [

        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Headphones", price: 199 },

    ];

    return(
        <div>
            <h3>Products</h3>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul>
        </div>

    );
}