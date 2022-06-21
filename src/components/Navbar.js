function Navbar({projectName, navList}) {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{projectName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                {navList.map((navlist) => (<li className="nav-item active">
                    <a className="nav-link">
                        {navlist}
                    </a>
                </li>))}
            </ul>
        </div>
    </nav>);
}

export default Navbar;