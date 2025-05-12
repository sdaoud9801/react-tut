const Header = ({title}) => {
    return (
        <header>
            <h1>{title ? title : "Def"}</h1>
        </header>
    )
}

export default Header;