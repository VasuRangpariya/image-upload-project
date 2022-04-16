import { useState } from "react";
import axios from "axios";
import store from "store";
import { useNavigate } from "react-router-dom";
const UploadForm = () => {
  const navigate = useNavigate();
  const userInfo = store.get("userData");
  const [data, setData] = useState({
    ImageName: "",
    Category: "",
    Downloads: 0,
    ContributerID: userInfo.ID ? userInfo.ID : 0,
  });

  const [file, setFile] = useState();
  const category = [
    "Food",
    "Health",
    "Transport",
    "Education",
    "Clothing",
    "Entertainment",
  ];
  const UploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", file);
    formData.append("Name", data.ImageName);
    formData.append("Category", data.Category);
    formData.append("Downloads", data.Downloads);
    formData.append("ContributerID", data.ContributerID);

    const response = await axios.post(
      "http://localhost:4000/api/v1/upload",
      formData
    );
    navigate("/report");
  };
  return (
    <div className='col-md-9 p-3' style={{ border: "1px solid gray" }}>
      <h2>Upload Image</h2>
      <form action='#'>
        <div className='inputForm mt-3'>
          <label>Name : </label>
          <input
            type='text'
            className='form-control w-75'
            name='ImageName'
            placeholder='Enter Image name'
            onChange={(e) => {
              console.log(data);
              setData({ ...data, ImageName: e.target.value });
            }}
          />
          <br />
          <label>Image :</label>

          <input
            type='file'
            className='form-control w-75 mt-2'
            name='imageFile'
            onChange={(e) => {
              console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }}
          />
          <label className='mt-2'>Category</label>
          <select
            className='form-control mt-2 w-75'
            defaultValue=''
            name='Category'
            onChange={(e) => {
              setData({ ...data, Category: e.target.value });
            }}
            value={data.Category}>
            <option disabled value=''>
              Select Category
            </option>
            {category.map((item, key) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <br />
        </div>
        <button className='btn btn-warning  w-25' onClick={UploadImage}>
          Save
        </button>
      </form>
    </div>
  );
};
export default UploadForm;
