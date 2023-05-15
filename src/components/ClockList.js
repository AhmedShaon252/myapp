import React from "react";
import Clock from "./Clock";

function ClockList({quantity = []}){
    return(
        <div>
           {quantity.map((key) => (
                <Clock key={key} />
            ))}
        </div>
    )
}
export default ClockList