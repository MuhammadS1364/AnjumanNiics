

export default function OrderList({names}){
    return (
        <div className="order-list">
            <ol>
            {names.map((name, index) =>{
                return(
                    <li key={index}>{name}</li>
                )
            })}   
            </ol>

        </div>
    )
}

