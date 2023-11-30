import "./navbar.scss";
 
const Navbar = () => {
  return ( 
    <div className="navbar">
        {/* this is to the left of navbar  */}
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Hub</span>
      </div>

{/* this is to the right of navbar */}
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />


        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>3</span>
        </div>


        <div className="user">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIcz8vllw9Z-NedyHFR0vTqXB3Xxi7sGdHuhg-vg7Y0H3U=s432-c-no"
            alt=""
          />
          <span>Varun Abhi</span>
        </div>


        <img src="/settings.svg" alt="" className="icon" />


      </div>
    </div>
  );
};

export default Navbar;