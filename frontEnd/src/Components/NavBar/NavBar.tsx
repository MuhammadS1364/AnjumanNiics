
import OrderList from "../OrderList/OrderList"

export default function NavBar(){
    const NavItems = ['Dashboard', 'My Acitivity', 'My Task', 'Result', 'Add OutReach']
    return(<>
            <div className="nav-header">

                <div className="userInfo">

                    <div className="userImg">
                        <img src="" alt="" />
                    </div>

                    <div className="NameEmail">
                        <h3>Muhammad Shafee</h3>
                        <h4>shafeealam1364@outlook.com</h4>
                    </div>

                </div>
            </div>
            
            <div className="nav-items">
                <OrderList names={NavItems} />
            </div>

            <div className="nav-footer">
                <div className="outBtn">
                    <i>📤</i>
                    <button type="button">Log Out</button>
                </div>
            </div>
        </>

    )
}