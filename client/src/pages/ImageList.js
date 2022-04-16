import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ImageCard from "../components/ImageCard";
import axios from "axios";
import Modal from "../components/Modal";
export default function ImageList() {
  const [imageData, setData] = useState({
    category: [],
    data: [],
    selectedCategory: [],
    showModal: false,
    clickID: "",
  });

  const IncreaseCount = async (e) => {
    const tempInfo = imageData.data.filter((item) => {
      if (item.ImageID === e.target.id) {
        return item;
      }
    });

    const response = await axios.post(
      "http://localhost:4000/api/v1/imageCount",
      tempInfo[0]
    );
    if (response.data.success) {
      setData((pre) => {
        return {
          ...pre,
          data: imageData.data.map((item) => {
            if (item.ImageID === e.target.id) {
              return {
                ...item,
                Downloads: item.Downloads + 1,
              };
            }
            return item;
          }),
        };
      });
    }
  };

  const ToggleModal = (e) => {
    const tempData = imageData.data.filter((item) => {
      return item.ImageID === e.target.id;
    });
    if (imageData.showModal) {
      setData({
        ...imageData,
        showModal: !imageData.showModal,
        clickID: "",
      });
    } else {
      setData({
        ...imageData,
        showModal: !imageData.showModal,
        clickID: e.target.id,
      });
    }
  };

  const changeEvent = (e) => {
    if (e.target.checked) {
      setData((pre) => {
        return {
          ...pre,
          selectedCategory: [...pre.selectedCategory, e.target.value],
        };
      });
    } else {
      setData((pre) => {
        return {
          ...pre,
          selectedCategory: pre.selectedCategory.filter(
            (item) => item !== e.target.value
          ),
        };
      });
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:4000/api/v1/imageList"
      );
      if (response.data.success) {
        const category = [
          ...new Set(
            response.data.info.map((item) => {
              return item.Category;
            })
          ),
        ];

        setData((pre) => {
          return {
            ...pre,
            category: category,
            data: response.data.info,
          };
        });
      }
    })().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar header={"Assignment - Normal User"}></Navbar>

      <div className='container m-auto p-4' style={{ height: "75vh" }}>
        <div className='row' style={{ justifyContent: "space-around" }}>
          <Sidebar data={imageData.category} handleChange={changeEvent} />

          <div
            className='col-9 p-3 row'
            style={{
              maxHeight: "82vh",
              overflow: "auto",
              border: "1px solid gray",
            }}>
            {imageData.selectedCategory.length === 0
              ? imageData.data.map((item) => {
                  return <ImageCard data={item} hangleModal={ToggleModal} />;
                })
              : imageData.data.map((item) => {
                  if (imageData.selectedCategory.includes(item.Category)) {
                    return <ImageCard data={item} hangleModal={ToggleModal} />;
                  }
                })}
          </div>
        </div>
      </div>

      <Modal
        showModal={imageData.showModal}
        hangleModal={ToggleModal}
        data={imageData.data.filter((item) => {
          if (item.ImageID === imageData.clickID) {
            return item;
          }
        })}
        IncreaseCount={IncreaseCount}
      />
    </>
  );
}
