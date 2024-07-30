import { useContext } from "react"
import { DataContext } from "../App"
import { Link } from "react-router-dom";

export default function Cart() {

    const {cart, setCart} = useContext(DataContext);

    const totalCart = [];
    let cartTotal = null;

    for (let i = 0; i < cart.length; i++) {
        totalCart.push(cart[i].total);
    }

    for (let i = 0; i < totalCart.length; i++) {
        cartTotal += totalCart[i];
    }

    function handleDeleteCart(index) {
        const updatedCartItems = cart.filter((item, i) => i !== index);
        setCart(updatedCartItems);
    }

    return (
        <div className="cart-page">

            <header>
                <h1>Sepetiniz</h1>
            </header>

            <main>
                <div className="cart-page-left">
                {
                    cart.length > 0 ?
                    cart.map((x, index)=> (
                        <div className="cart-item">
                            <img src={x.image01} alt="" />
                            <div>
                                <button onClick={() => handleDeleteCart(index)}><i className="fa-solid fa-trash-can"></i></button>
                                <h1>{x.name}</h1>
                                <p>Beden: <span>{x.size}</span></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed molestiae incidunt mollitia ad, voluptate quia!</p>
                                <div>
                                    <h3>{x.piece} x {x.price} TL =</h3>
                                    <h3 style={{fontWeight: '700'}}>{x.total},00 TL</h3>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <p className="warning">Sepetinizde ürün bulunmuyor. <Link to={'/magaza'}>Mağaza</Link>mıza göz atmak ister misiniz?</p>
                }
                </div>
                {
                    cart.length > 0 ?
                    <div className="cart-page-right">
                        <header>
                            <h3>Sepet Toplamı</h3>
                        </header>
                        <main>
                            <span>
                                <p>Ürün Toplamı</p>
                                <h3>{cartTotal}.00 TL</h3>
                            </span>
                            <span>
                                <p>Kargo Ücreti</p>
                                <h3>0 TL</h3>
                            </span>
                        </main>
                        <div className="cart-line"></div>
                        <footer>
                            <span>
                                <p>Toplam</p>
                                <h3>{cartTotal} TL</h3>
                            </span>

                            <button>Ödeme Yap</button>
                        </footer>
                    </div>
                    :
                    ''
                }
            </main>

        </div>
    )
}