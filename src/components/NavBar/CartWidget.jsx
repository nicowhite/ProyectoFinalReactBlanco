import { useContext } from "react"
import { CartContext } from "../../context/CartContext"





const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <div id="cartwidget">
            <img src="../public/img/cart.png" alt="" />
            <p>{totalCantidad()}</p>
        </div>
        
    )
}


export default CartWidget