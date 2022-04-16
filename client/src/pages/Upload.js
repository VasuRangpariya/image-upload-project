import Navbar from "../components/Navbar";
import store from "store";
import UploadForm from "../components/Upload";
import AdminSidebar from "../components/AdminSIdebar";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const userInfo = store.get("userData");
  const navigate = useNavigate();
  if (userInfo && !userInfo.isContributer) {
    navigate("/images");
  }
  return (
    <div>
      <Navbar header='Assignment - Contributor Login' />
      <div className='container' style={{ justifyContent: "space-around" }}>
        <div className='row m-3'>
          {/* <Sidebar></Sidebar> */}
          <AdminSidebar />
          <UploadForm />
        </div>
      </div>
    </div>
  );
};
export default Upload;
