
import OrderList from "../OrderList/OrderList"

export default function NavBar(){
    const NavItems = ['Dashboard', 'My Acitivity', 'My Task', 'Result', 'Add OutReach']
    return(
        <div className="nav-container">
            <OrderList names={NavItems} />
        </div>
    )
}