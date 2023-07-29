import { useRef, useState } from "react";
import axios from "axios";
import FormData from "form-data";

function Camera() {
  const takePictureRef = useRef();
  const showPictureRef = useRef();
  //   const errorRef = useRef();
  const [res, setRes] = useState(null);
  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      try {
        // const imgURL = URL.createObjectURL(file);
        // showPictureRef.current.src = imgURL;
        // URL.revokeObjectURL(imgURL);

        const message = {
          images: [
            {
              format: file.type.split("/")[1], // file format
              name: file.name, // file name
            },
          ],
          requestId: "12345", // unique string
          timestamp: Date.now(),
          version: "V2",
        };
        console.log("message N File", message, file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", JSON.stringify(message));

        console.log("formData", formData);

        // console.log("form", res.status);
        axios
          .post(
            "https://pd752iexiy.apigw.ntruss.com/custom/v1/24009/c1522899ff50d2d48abe72d834f6606da61f5e26a00cc4c641cb29c27cb1a33b/general",
            formData,
            {
              headers: {
                "X-OCR-SECRET": `${process.env.REACT_APP_OCR_SECRET}`,
                ...formData.getHeaders(),
              },
            }
          )
          .then((res) => {
            alert("!!");
            console.log("axios passed", res);
            console.log("axios passed", res.status);
          })
          .catch((err) => {
            alert("??");
            console.log("axios nopassed", err);
            console.log("axios nopassed", err.status);
          });

        alert("!!");
        // console.log("axios passed", result);
        console.log("axios passed", res.status);
        if (res.status === 200) {
          alert("requestWithFile response:", res.data);
        } else {
          alert("bb");
        }
      } catch (e) {
        if (e.response) {
          console.warn("requestWithFile error", e.response);
        } else {
          //   console.warn("Neither createObjectURL or FileReader are supported");
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
      <h1>{res}</h1>
      <h2>Preview:</h2>
      <img src="about:blank" alt="" id="show-picture" ref={showPictureRef} />
    </div>
  );
}

export default Camera;
