
function FilterHogs({ value, setValue, sort, onSetSort }) {

    return (<>
        <div>
            <input type="checkbox"
                name="greased"
                id="greased"
                checked={value}
                onChange={(e) => {
                    setValue(e.target.checked)
                }} />
            <label htmlFor="greased">greased? </label>
            <select name="sort" value={sort} onChange={(e) => onSetSort(e.target.value)}>
                <option value="random">no filter</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    </>
    )
}
export default FilterHogs