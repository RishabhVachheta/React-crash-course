
function Header({HeaderInfo,children}){
    // let HeaderInfo = props
    // console.log(HeaderInfo)
    // console.log(props.HeaderInfo.name)
    // console.log(props.HeaderInfo.phone)
    return(
        <div>
            {/* <h1>{props.name}</h1>
            <h1>{props.phone}</h1> */}
            {children}
            <h3>{HeaderInfo.name} | {HeaderInfo.phone}</h3>
            <h1>Header Part</h1>
        </div>
    )
}

export default Header;