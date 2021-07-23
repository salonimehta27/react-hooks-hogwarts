
function HogsDetails({ specialty, weight, greased, highest }) {
    return <div style={{ backgroundColor: "pink" }}>
        <p style={{ color: "brown" }}>Specialty: {specialty}</p>
        <p style={{ color: "brown" }}>Weight: {weight}</p>
        <p style={{ color: "brown" }}>Greased: {greased ? 'Greased' : 'Non-Greased'}</p>
        <p style={{ color: "brown" }}>Highest medal achieved: {highest}</p>
        <br></br>
    </div>
}
export default HogsDetails