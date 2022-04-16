const AdminSidebar = () => {
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
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href='/upload' className='nav-link'>
              Upload Image
            </a>
            <a href='/report' className='nav-link '>
              Download Report
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default AdminSidebar;
