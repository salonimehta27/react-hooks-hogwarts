import HogsDetails from "./HogsDetails"
import { useState } from "react"

function HogList({ name, image, hogsSpec }) {
    console.log(hogsSpec.greased)
    const [showDetails, setShowDetails] = useState(false)

    function handleTileClick() {
        setShowDetails(!showDetails)
    }
    return (
        <div className="ui eight wide column">
            <p style={{ color: "purple" }}>{name}</p>
            <img src={image}
                onClick={handleTileClick}
                style={{ width: "400px", height: "400px" }}
                alt="Hog Pics">
            </img>

            {showDetails ? <HogsDetails specialty={hogsSpec.specialty}
                weight={hogsSpec.weight}
                greased={hogsSpec.greased}
                highest={hogsSpec["highest medal achieved"]}>
            </HogsDetails> : null}
        </div>)
}
export default HogList