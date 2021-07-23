
function FilterHogs({ value, setValue }) {
    // console.log(value, setValue, handleGreasedFilter)
    return (
        <div>
            <input type="checkbox"
                name="greased"
                id="greased"
                checked={value}
                onChange={(e) => {
                    setValue(e.target.checked)
                }} />
            <label htmlFor="greased">greased ?</label>
        </div>
    )
}
export default FilterHogs