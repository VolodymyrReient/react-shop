function Footer() {
  return (
    <footer className="page-footer purple lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/VolodymyrReient/react-shop"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
