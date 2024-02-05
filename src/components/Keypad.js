// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        return (console.log('Entering password...'))
    }
    return (
        <div>
            <input onChange={handleChange} type="password" id="pwd" name="pwd"/>
        </div>
    )
}

export default Keypad;