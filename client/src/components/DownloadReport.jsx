const DownloadReport = (props) => {
  return (
    <>
      <table className='table-bordered table'>
        <thead>
          <tr>
            <th>Image Name</th>
            <th>Category</th>
            <th>Total Downloads</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr tabIndex={index}>
                <td>{item.ImageName}</td>
                <td>{item.Category}</td>
                <td>{item.Downloads}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default DownloadReport;
