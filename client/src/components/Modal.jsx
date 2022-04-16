const Modal = (props) => {
  console.log(props);
  return (
    <>
      <div
        className={
          props.showModal ? "modal fade show d-block" : "modal fade d-none"
        }
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
        style={{ background: "#0e0d0d5e" }}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title text-center' id='staticBackdropLabel'>
                Download Image
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={props.hangleModal}></button>
            </div>
            <div className='modal-body m-auto'>
              {props.data[0] && (
                <>
                  <img
                    alt='fail'
                    src={require(`../../public/upload/${props.data[0].ImagePath}`)}
                    className='image-responsive'
                    width='300px'
                    height='auto'
                  />
                  <p className='mb-1'>Image Name :{props.data[0].ImageName} </p>
                  <p className='mb-1'>Category : {props.data[0].Category}</p>
                  <p className='mb-1'>
                    Total Downloads :{props.data[0].Downloads}
                  </p>

                  <a
                    href={`../../upload/${props.data[0].ImagePath}`}
                    download
                    style={{ textDecoration: "none", color: "ButtonText" }}>
                    <button
                      id={props.data[0].ImageID}
                      className='btn btn-warning mt-3 text-center'
                      onClick={props.IncreaseCount}>
                      Download
                    </button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
