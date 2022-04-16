import axios from "axios";
import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSIdebar";
import DownloadReport from "../components/DownloadReport";
import Navbar from "../components/Navbar";
import store from "store";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const [data, setData] = useState([]);
  const userInfo = store.get("userData");
  const navigate = useNavigate();
  if (userInfo && !userInfo.isContributer) {
    navigate("/images");
  }
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:4000/api/v1/imageList"
      );
      if (response.data.success) {
        setData((pre) => {
          return response.data.info;
        });
      }
    })().catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar header='Assignment - Contributor Login'></Navbar>
      <div
        className='row container m-auto mt-4'
        style={{ justifyContent: "space-around" }}>
        <AdminSidebar></AdminSidebar>
        <div className='col-md-9 p-3' style={{ border: "1px solid gray" }}>
          <h2 className='mb-3'>Download Report</h2>
          <DownloadReport data={data} />
        </div>
      </div>
    </div>
  );
};
export default Report;
