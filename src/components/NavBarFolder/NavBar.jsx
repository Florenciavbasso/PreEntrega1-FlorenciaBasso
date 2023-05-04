import CartWidget from '../CartWidgetFolder/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h2> charra </h2>

            <div>
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Accesorios</button>
            </div>

            <CartWidget width="20px" height="20px" />
        </nav>
    )
}

export default NavBar