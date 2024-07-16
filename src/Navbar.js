const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The dance blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{color: 'white', backgroundColor: 'rgb(89, 128, 232)', borderRadius: '8px'}}>Create a blog</a>
      </div>
    </nav>
  );

}

export default NavBar;
