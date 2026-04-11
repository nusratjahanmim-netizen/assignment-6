const NavBar = () => {
  return (
     <nav className="
     
     mx-auto flex items-center justify-between px-8 lg:px-16">
      <div className="navbar-left">
        <div className="px-0 py-4">
          <h1 className="text-4xl font-bold leading-normal text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text ">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-middle">
        <div className="navbar-middle flex-1 hidden md:flex justify-center items-center py-9">
          <ul className="flex gap-8">
            <li><a href="/" className="leading-tight text-gray-600 hover:text-indigo-600">Products</a></li>
            <li><a href="/" className="leading-tight text-gray-600 hover:text-indigo-600">Features</a></li>
          <li><a href="/" className="leading-tight text-gray-600 hover:text-indigo-600">Pricing</a></li>
          <li><a href="/" className="leading-tight text-gray-600 hover:text-indigo-600">Testimonials</a></li>
          <li><a href="/" className="leading-tight text-gray-600 hover:text-indigo-600">FAQ</a></li>
             
          </ul>
          
        </div>
      </div>
      <div className="navbar-right flex items-center gap-8">
        <ul className="hidden md:flex gap-8 items-center">
          <li><img src="/shopping-cart.png" alt="" /></li>
          <li>Login</li>
          </ul>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-700 rounded-4xl border-0 px-4 py-3">Get Started</button>
      </div>
    </nav>
  );
};

export default NavBar;