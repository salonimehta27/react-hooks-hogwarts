import FilterHogs from "./FilterHogs";
import HogList from "./HogList";
import { useState } from "react"

function Main({ hogsInfo }) {

    const [greased, setGreased] = useState(false);
    const [sortPigs, setSort] = useState("name");
    const checkHogs = hogsInfo.filter(greaseCheck => greased ? greaseCheck.greased : true).sort((a, b) => {
        if (sortPigs === "name") {
            let fa = a.name.toLowerCase()
            let fb = b.name.toLowerCase()
            if (fa < fb) {
                return -1
            }
            else if (fa > fb) {
                return 1
            }
            return 0;
        }
        else if (sortPigs === "weight") {
            return a.weight - b.weight;
        }
    })
    // console.log(checkHogs.map(n => n.name).sort())
    // console.log(checkHogs.map(w => w.weight).sort())

    return (<>
        <div>
            <FilterHogs
                value={greased}
                setValue={setGreased}
                sort={sortPigs}
                onSetSort={setSort} />
        </div>

        <div className="ui grid container">
            {checkHogs.map(hogs => <HogList key={hogs.name} name={hogs.name} image={hogs.image} hogsSpec={hogs} ></HogList>)}
        </div>
    </>)
}
export default Main