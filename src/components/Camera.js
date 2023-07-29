import { useCallback, useRef, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { ImageUpload } from "./Image/UploadImage";
import compressedFile from "./Image/compressFile";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../Firebase/firebase";

function Camera({ takePictureRef }) {
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState();

  const showPictureRef = useRef();
  //   const errorRef = useRef();
  const [res, setRes] = useState(null);

  const onImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const lowCapacityFile = await compressedFile(file[0]);

    const storageRef = ref(storage, `files/${file[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, lowCapacityFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        switch (error.code) {
          case "storage/canceld":
            alert("Upload has been canceled");
            break;
        }
      },
      () => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

          setImageUrl(downloadURL);

          const sendData = {
            images: [
              {
                format: "jpg", // file format
                name: file[0].name, // file name
                data: null,
                url: downloadURL,
              },
            ],
            lang: "ko",
            requestId: "string",
            resultType: "string",
            timestamp: Date.now(),
            version: "V2", // unique string
          };

          console.log(sendData);

          const response = await axios.post(
            "https://qqj3d6o4ff.apigw.ntruss.com/custom/v1/24015/620195bf0f21be5de59cbc277f93c2b2d6386ad9f503419b580b86c3625d8425/general",
            sendData, // 본문 데이터
            {
              headers: {
                "X-OCR-SECRET": process.env.REACT_APP_OCR_SECRET, // 헤더
              },
            }
          );

          console.log(response);
          setResult(response);
        });
      }
    );
  };

  return (
    <div className="container">
      <input
        type="file"
        id="take-picture"
        accept=".jpg,.jpeg,.png"
        ref={takePictureRef}
        onChange={onImageChange}
      />
    </div>
  );
}

export default Camera;
