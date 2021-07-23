import FilterHogs from "./FilterHogs";
import HogList from "./HogList";
import { useState } from "react"

function Main({ hogsInfo }) {

    const [greased, setGreased] = useState(false)
    const checkHogs = hogsInfo.filter(greaseCheck => greased ? greaseCheck.greased : true)

    return (<>
        <div>
            <FilterHogs value={greased} setValue={setGreased} />
        </div>

        <div className="ui grid container">
            {checkHogs.map(hogs => <HogList key={hogs.name} name={hogs.name} image={hogs.image} hogsSpec={hogs} ></HogList>)}
        </div>
    </>)
}
export default Main