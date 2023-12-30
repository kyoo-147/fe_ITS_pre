import Card from "../../modules/dashboard/Card.jsx";
import { MdCameraAlt, MdOutlineVisibility, MdPublic } from "react-icons/md";
import { useEffect, useState } from "react";
import { CAMERA_DATA } from "../../assets/data/camera.js";
import { getViewCameraById } from '../../utils/code.js'
import ReactPlayer from "react-player";
import TrafficLightsCam5 from "../../modules/camera/TrafficLightsCam5.jsx";
import TrafficLightsCam6 from "../../modules/camera/TrafficLightsCam6.jsx";
import TrafficLightsCam7 from "../../modules/camera/TrafficLightsCam7.jsx";
import TrafficLightsCam8 from "../../modules/camera/TrafficLightsCam8.jsx";

const CameraPage = () => {
  // const [total, setTotal] = useState(0);
  const [cam, setCam] = useState(0)
  const [viewVideo, setViewVideo] = useState('')
  const [offCam, setOffCam] = useState(true)
  // useEffect(() => {
  //   const fetchTotal = async () => {
  //     const res = await fetch("http://localhost:5000/0");
  //     const data = await res.json();
  //     setTotal(data.total);
  //   };
  //   fetchTotal();
  // }, []);
  const handleSelectVideo = async (id) => {
    setOffCam(true)
    const video = await getViewCameraById(id)
    setCam(id)
    setViewVideo(video)
  }
  const handleSelectCam = async (id) => {
    setCam(id)
    setOffCam(false)
  }
  return (
    <div className={`h-full w-full`}>
      <div className={`grid grid-cols-3 gap-5`}>
        <Card
          icon={<MdPublic size={25} />}
          title="Số lượng camera"
          count={6}
          bg={`bg-blue-100 text-blue-500`}
        />
        <Card
          icon={<MdPublic size={25} />}
          title="Đang hoạt động"
          count={6}
          bg={`bg-green-100 text-green-500`}
        />
        <Card
          icon={<MdPublic size={25} />}
          title="Đang bảo trì"
          count={0}
          bg={`bg-red-100 text-red-500`}
        />
      </div>

      <div className={`mt-5 flex justify-between gap-5`}>
        <div className={`w-1/3 bg-gray-50 p-5 `}>
          <div className={`mb-5 flex items-center justify-between`}>
            <div className={`text-lg font-semibold uppercase text-gray-700`}>
              Danh sách camera
            </div>
          </div>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {CAMERA_DATA.map(item => (
              <li
                className=" rounded-lg mb-3 border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800 sm:py-4 ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <MdCameraAlt color={"#3B82F6"} size={30} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 truncate text-lg text-sm font-medium uppercase text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {item.address}
                    </p>
                  </div>
                  {item.id != 5 && item.id != 6
                    ?
                    <button
                      onClick={() => handleSelectVideo(item.id)}
                      type="button"
                      className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      <MdOutlineVisibility size={20} />
                    </button>
                    :
                    <button
                      onClick={() => handleSelectCam(item.id)}
                      type="button"
                      className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      <MdOutlineVisibility size={20} />
                    </button>
                  }

                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`w-2/3 bg-gray-50 p-5`}>
          {cam != 5 && cam != 6 && cam != 7 && cam != 8 ?
            <div>
              <ReactPlayer
                className="mt-20 mb-20"
                url={viewVideo}
                width="100%"
                playing={true}
                loop={true}
                controls={false}
              />
            </div>
            :
            cam == 5 ?
              <div>
                <iframe
                  className={`ml-10 mt-20 mb-10 aspect-video`}
                  src="http://localhost:5000/5"
                  width="100%"
                  height={500}
                  allow="autoplay"
                />
                {/* <div className="flex place-content-center">
                  <TrafficLightsCam5/>
                </div> */}
              </div>
              :
              cam == 6 ?
                <div>
                  <iframe
                    className={`ml-10 mt-20 mb-10 aspect-video`}
                    src="http://localhost:5000/6"
                    width="100%"
                    height={500}
                    allow="autoplay"
                  />
                  {/* <div className="flex place-content-center">
                    <TrafficLightsCam6/>
                  </div> */}
                </div>
                :
                cam == 7 ?
                  <div>
                    <iframe
                      className={`ml-10 mt-20 mb-10 aspect-video`}
                      src="http://localhost:5000/7"
                      width="100%"
                      height={500}
                      allow="autoplay"
                    />
                    <div className="flex place-content-center">
                      <TrafficLightsCam7 />
                    </div>
                  </div>
                  :
                  <div>
                    <iframe
                      className={`ml-10 mt-20 mb-10 aspect-video`}
                      src="http://localhost:5000/8"
                      width="100%"
                      height={500}
                      allow="autoplay"
                    />
                    {/* <div className="flex place-content-center">
                      <TrafficLightsCam8 />
                    </div> */}
                  </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CameraPage;