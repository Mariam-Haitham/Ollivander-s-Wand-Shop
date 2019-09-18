
import React from "react";
import WandCard from "./WandCard"

function WandsList(props) {
    const list = props.wands.map(wand => {
        return <WandCard wand={wand} ket={wand.core} />
    })
    return (
        <div className="content col-10">
            <div className="wands">
                <h3 style={{ fontWeight: "900", textAlign: "center" }}>Wands</h3>
                <div className="row">
                    {list}
                </div>
            </div>
        </div>
    )
}

export default WandsList