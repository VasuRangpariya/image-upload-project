const Navbar = (props) => {
  return (
    <nav className='navbar navbar-light bg-warning'>
      <h2 className='navbar-brand mx-4 my-3'>{props.header}</h2>
    </nav>
  );
};
export default Navbar;
