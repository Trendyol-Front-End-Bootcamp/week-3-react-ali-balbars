export default function Filter() {
    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="Filter">
            <input type="text" onChange={handleChange}/>
        </div>
    )
}