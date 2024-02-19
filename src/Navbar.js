const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#43d2bd ",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
