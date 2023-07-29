import { useRef } from "react";
import axios from "axios";
import FormData from "form-data";

function Camera() {
  const takePictureRef = useRef();
  const showPictureRef = useRef();
  //   const errorRef = useRef();

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      try {
        const imgURL = URL.createObjectURL(file);
        showPictureRef.current.src = imgURL;
        URL.revokeObjectURL(imgURL);

        const message = {
          images: [
            {
              format: file.type.split("/")[1],
              name: file.name,
            },
          ],
          requestId: "12345",
          timestamp: Date.now(),
          version: "V2",
        };

        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", JSON.stringify(message));

        const res = await axios.post(
          "https://pd752iexiy.apigw.ntruss.com/custom/v1/24009/c1522899ff50d2d48abe72d834f6606da61f5e26a00cc4c641cb29c27cb1a33b/general",
          formData,
          {
            headers: {
              "X-OCR-SECRET": `${process.env.REACT_APP_OCR_SECRET}`,
              ...formData.getHeaders(),
            },
          }
        );

        if (res.status === 200) {
          console.log("requestWithFile response:", res.data);
        }
      } catch (e) {
        if (e.response) {
          console.warn("requestWithFile error", e.response);
        } else {
          console.warn("Neither createObjectURL or FileReader are supported");
          //   errorRef.current.textContent =
          //     "Neither createObjectURL or FileReader are supported";
        }
      }
    }
  };

  return (
    <div className="container">
      <p>
        <input
          type="file"
          id="take-picture"
          accept="image/*"
          ref={takePictureRef}
          onChange={handleFileChange}
        />
      </p>
      <h2>Preview:</h2>
      <img src="about:blank" alt="" id="show-picture" ref={showPictureRef} />
    </div>
  );
}

export default Camera;
