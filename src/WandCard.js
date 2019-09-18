
import React from "react"

function WandCard(props) {
    return (

        <div className="col-lg-4 col-md-6 col-12">
            <div className="card" style={{ width: "18rem", padding: "15px" }}>
                <img className="card-img-top img-fluid"
                    src={props.wand.imageUrl}
                    alt="Just a pic!!" />
                <div className="card-body" style={{ textAlign: "center" }}>
                    <h5 className="card-title" >
                        <span>
                            {props.wand.core}
                        </span>
                    </h5>
                    <small className="card-text" >
                        woodtype: {props.wand.wood} <br />
                        length:{props.wand.length} cm
                    </small>
                </div>
            </div>
        </div>
    )
}

export default WandCard