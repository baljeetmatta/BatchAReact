
type ProductProps={
    line1:string,
    image:string
}
const ProductBanner=(props:ProductProps)=>{

    return (
        <>
         <div className="flex grid-6 bg-red-200 p-4">
                    <div>
                        <div>{props.line1}</div>
                        <div>Free Shipping</div>
                        <div>Attractive Natural Furniture</div>
                        <div><a href="#">Shop Now</a></div>
                    </div>
                    <img src={props.image} className="w-48"/>

                </div>
        </>
    )
}
export default ProductBanner;