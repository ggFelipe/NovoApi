function Menu(props){
    const {title} = props
    return(
        <nav>
            <span>{title}</span><br/>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
        </nav>
    )
}

export default Menu