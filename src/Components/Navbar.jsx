import './navbar.css'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h2><a className="navbar-brand" href="#">VARCHAMPS</a></h2>
                <div className="mx-3 "></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active p-3" aria-current="page" href="#">HOME</a>
                        <a className="nav-link p-3" href="#">CAMPERONATOS</a>
                        <a className="nav-link p-3" href="#">SOBRE</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}