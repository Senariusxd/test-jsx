const name = {
    name: "React",
    year: 2024,
};

export function Footer() {
    return (
        <div className="footer">
            <footer>
                Año {name.year}. My Company {name.name}
            </footer>
        </div>
);
}
