import './styles/App.css'

export function Header() {
    return(
        <div>
            <header>
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </div>
                </div>
            </nav>
            <h1 className="title">Welcome to my app the React</h1>
            </header>
        </div>
    )
}