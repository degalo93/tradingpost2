import React from 'react'
import Card from "../Cards/index"


function CardRow(props) {
    console.log("CardRow PROPS: ", props)
    return (
        <div>

            <div className="row">
                {props.items.map((item, index) => (

                    <Card
                        title={item.title}
                        description={item.description}
                        image={item.picture}
                        id={item._id}
                        key={item._id}
                        condition = {item.condition}
                        owner = {item._owner._id}
                        nick = {item._owner.userName}
                        category = {item.category}
                        currentUser = {props.currentUser}

                    />
                ))}
            </div>

        </div>
    )

}

export default CardRow;