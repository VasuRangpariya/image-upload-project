const Sidebar = (props) => {
  return (
    <>
      <div
        className='col-md-3 p-3'
        style={{
          overflow: "auto",
          maxWidth: "280px",
          height: "82vh",
          maxHeight: "82vh",
          border: "1px solid gray",
        }}>
        <a
          href='#'
          className='d-flex align-items-center  mb-md-0 me-md-auto link-dark text-decoration-none'>
          <span className='fs-4'>Sidebar</span>
        </a>
        <hr></hr>
        <ul className='nav  flex-column mb-auto'>
          {props.data.map((item, key) => {
            return (
              <li className='nav-item' key={key}>
                <div>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    value={item}
                    id={item}
                    onChange={props.handleChange}></input>
                  &nbsp;&nbsp;
                  <label className='form-check-label' htmlFor={item}>
                    {item}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
