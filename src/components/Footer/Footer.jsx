

const Footer = () => {
    return (
        <footer className="p-10 bg-slate-950 text-base-content">
        <div className="footer max-w-6xl mx-auto">
            <aside className="text-white">
                
                <a href='/'><img src="https://i.ibb.co/sKprTQZ/Screenshot-1-removebg-preview.png" alt="" /></a>
            </aside>
            <nav className="text-white">
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="text-white">
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="text-white">
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </div>
    </footer>
    );
};

export default Footer;