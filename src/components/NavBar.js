import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">About Us</a>
                <a href="#">Login</a>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar