
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
=======
// import { useRef, useState } from "react";
// import axios from "axios";
// import FormData from "form-data";
// import { ImageUpload } from "./Image/UploadImage";
// import compressedFile from "./Image/compressFile";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../Firebase/firebase";

// function Camera() {
//   const [imageUrl, setImageUrl] = useState("");
//   const [result, setResult] = useState();

//   const takePictureRef = useRef();
//   const showPictureRef = useRef();
//   //   const errorRef = useRef();
//   const [res, setRes] = useState(null);

//   const onImageChange = async (e) => {
//     e.preventDefault();
//     const file = e.target.files;
//     if (!file) return null;

//     const lowCapacityFile = await compressedFile(file[0]);

//     const storageRef = ref(storage, `files/${file[0].name}`);
//     const uploadTask = uploadBytesResumable(storageRef, lowCapacityFile);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//       },
//       (error) => {
//         switch (error.code) {
//           case "storage/canceld":
//             alert("Upload has been canceled");
//             break;
//         }
//       },
//       () => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           console.log("File available at", downloadURL);

//           setImageUrl(downloadURL);

//           const sendData = {
//             images: [
//               {
//                 format: "jpg", // file format
//                 name: file[0].name, // file name
//                 data: null,
//                 url: downloadURL,
//               },
//             ],
//             lang: "ko",
//             requestId: "string",
//             resultType: "string",
//             timestamp: Date.now(),
//             version: "V2", // unique string
//           };

//           console.log(sendData);

//           const response = await axios.post(
//             "https://qqj3d6o4ff.apigw.ntruss.com/custom/v1/24015/620195bf0f21be5de59cbc277f93c2b2d6386ad9f503419b580b86c3625d8425/general",
//             sendData, // 본문 데이터
//             {
//               headers: {
//                 "X-OCR-SECRET": process.env.REACT_APP_OCR_SECRET, // 헤더
//               },
//             }
//           );

//           console.log(response);
//           setResult(response);

//           //   {
//           //     "images": [
//           //         {
//           //             "format": "jpg",
//           //             "name": "medium",
//           //             "data": null,
//           //             "url": "https://fresh.haccp.or.kr/prdimg/2009/2009047600992/2009047600992-1.jpg"
//           //         }
//           //     ],
//           //     "lang": "ko",
//           //     "requestId": "string",
//           //     "resultType": "string",
//           //     "timestamp": {{$timestamp}},
//           //     "version": "V2"
//           // }
//         });
//       }
//     );
//   };

//   const handleFileChange = async (event) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       try {
//         // const imgURL = URL.createObjectURL(file);
//         // showPictureRef.current.src = imgURL;
//         // URL.revokeObjectURL(imgURL);
//         console.log("file", file);
//         const message = {
//           images: [
//             {
//               format: file.type.split("/")[1], // file format
//               name: file.name, // file name
//             },
//           ],
//           requestId: "12345", // unique string
//           timestamp: Date.now(),
//           version: "V2",
//         };
//         console.log("message N File", message, file);
//         const formData = new FormData();
//         console.log(formData);
//         await formData.append("file", file);
//         await formData.append("message", JSON.stringify(message));

//         console.log("formData", formData);

//         // console.log("form", res.status);

//         axios
//           .post(
//             "https://pd752iexiy.apigw.ntruss.com/custom/v1/24009/c1522899ff50d2d48abe72d834f6606da61f5e26a00cc4c641cb29c27cb1a33b/general",
//             formData,
//             {
//               headers: {
//                 "X-OCR-SECRET": `${process.env.REACT_APP_OCR_SECRET}`,
//                 ...formData.getHeaders(),
//               },
//             }
//           )
//           .then((res) => {
//             alert("!!");
//             console.log("axios passed", res);
//             console.log("axios passed", res.status);
//           })
//           .catch((err) => {
//             alert("??");
//             console.log("axios nopassed", err);
//             console.log("axios nopassed", err.status);
//           });

//         alert("!!");
//         // console.log("axios passed", result);
//         console.log("axios passed", res.status);
//         if (res.status === 200) {
//           alert("requestWithFile response:", res.data);
//         } else {
//           alert("bb");
//         }
//       } catch (e) {
//         if (e.response) {
//           console.warn("requestWithFile error", e.response);
//         } else {
//           //   console.warn("Neither createObjectURL or FileReader are supported");
//           //   errorRef.current.textContent =
//           //     "Neither createObjectURL or FileReader are supported";
//         }
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <p>
//         <input
//           type="file"
//           id="take-picture"
//           accept=".jpg,.jpeg,.png"
//           ref={takePictureRef}
//           onChange={onImageChange}
//         />
//       </p>
//       <h1>{res}</h1>
//       <h2>Preview:</h2>
//       {/* <img src={imageUrl} alt="" id="show-picture" ref={showPictureRef} /> */}
//       <h1>{result}</h1>
//       <ImageUpload />
//     </div>
//   );
// }

// export default Camera;

