const ImageCard = (props) => {
  console.log(props);
  return (
    <div className='col-md-4 col-4'>
      <img
        src={require(`../../public/upload/${props.data.ImagePath}`)}
        width='100%'
        height='150px'
        alt={props.data.ImagePath}
        id={props.data.ImageID}
        onClick={props.hangleModal}
      />
      <div className='mt-2'>
        <p className='mb-1'>Contributer : {props.data.Name}</p>
        <p className='mb-1'>Image Name : {props.data.ImageName}</p>
        <p className='mb-1'>Total Downloads : {props.data.Downloads}</p>
      </div>
    </div>
  );
};
export default ImageCard;
