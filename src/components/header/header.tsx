import Icon from "../svgs/icon/icon"
import styles from "./header.module.css"

function Header() {
    return (
        <div className={`navbar navbar-expand-lg sticky-top ${styles.bgBlur}`}>
            <header className="d-flex flex-wrap justify-content-center py-3 container-fluid">
                <div className={`d-flex align-items-center me-md-auto text-decoration-none  ${styles.sizeIcon}`}>
                    <Icon />
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#" className="nav-link link-secondary" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-secondary">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-secondary">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-secondary">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-secondary">About</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header