
function Form({ name, specialty, greased, image, weight, highestMedal, onSetFormData, formData }) {
    function handleFormData(e) {
        const key = e.target.id
        const value = e.target.value
        onSetFormData({ ...formData, [key]: value })
    }
    return (

        <div>
            <form>
                <label htmlFor="name">Hogs Name:</label>
                <input type="text" id="name" value={name} onChange={handleFormData} placeholder="Enter the Hogs name.."></input>
                <label htmlFor="name">Hogs Image:</label>
                <input type="url" id="image" value={image} onChange={handleFormData} placeholder="paste the URL of Hogs Picture.."></input>
                <label htmlFor="specialty">Specialty:</label>
                <input type="text" id="specialty" value={specialty} onChange={handleFormData} placeholder="Enter the Hogs specialty.."></input>
                <label htmlFor="weight">Weight:</label>
                <input type="text" id="weight" value={weight} onChange={handleFormData} placeholder="Enter the Hogs weight.."></input>
                <label htmlFor="greased">Greased:</label>
                <input type="text" id="greased" value={greased} onChange={handleFormData} placeholder="Greased or Non-greased?"></input>
                <label htmlFor="highestMedal">Highest medal achieved:</label>
                <input type="text" id="highestMedal" onChange={handleFormData} value={highestMedal} placeholder="Highest medal"></input>

                <button type="submit" id="submit" value="submit" >Submit the Form</button>
            </form>
        </div>

    )

}

export default Form