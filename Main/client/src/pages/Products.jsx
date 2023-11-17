
const Products = ({productDisplay}) => {
    return (
        <div> {productDisplay && 
        productDisplay.map (product => (
            <p>{product.title}</p>
        ))
        } </div>
    )
}

export default Products 