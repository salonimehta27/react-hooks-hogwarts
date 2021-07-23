import FilterHogs from "./FilterHogs";
import HogList from "./HogList";
import { useState } from "react"
import Form from "./Form";

function Main({ hogsInfo }) {

    const [grease, setGreased] = useState(false);
    const [sortPigs, setSort] = useState("name");
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: "",
        weight: "",
        "highest medal achieved": "",
        image: ""
    })

    const checkHogs = hogsInfo.filter(greaseCheck => grease ? greaseCheck.greased : true).sort((a, b) => {
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
                value={grease}
                setValue={setGreased}
                sort={sortPigs}
                onSetSort={setSort} />
        </div>

        <div>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Add a Hog"}</button>
        </div>
        {showForm ? <Form
            formData={formData}
            name={formData.name}
            specialty={formData.specialty}
            greased={formData.greased}
            weight={formData.weight}
            image={formData.image}
            highestMedal={formData["highest medal achieved"]}
            onSetFormData={setFormData} /> : null}
        <div className="ui grid container">
            {checkHogs.map(hogs => <HogList key={hogs.name} name={hogs.name} image={hogs.image} hogsSpec={hogs} ></HogList>)}
        </div>
    </>)
}
export default Main