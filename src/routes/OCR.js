import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Tesseract, { createWorker } from "tesseract.js";

export default function OCR() {
  //   const worker = createWorker({
  //     workerPath:
  //       "[https://unpkg.com/tesseract.js@v4.0.1/dist/worker.min.js](https://unpkg.com/tesseract.js@v4.0.1/dist/worker.min.js)",
  //     langPath:
  //       "[https://tessdata.projectnaptha.com/4.0.0](https://tessdata.projectnaptha.com/4.0.0)",
  //     corePath:
  //       "[https://unpkg.com/tesseract.js-core@v4.0.1/tesseract-core.wasm.js](https://unpkg.com/tesseract.js-core@v4.0.1/tesseract-core.wasm.js)",
  //   });
  const [image, setImage] = useState(
    "./img/KakaoTalk_Photo_2023-07-28-22-36-45.jpeg"
  );
  const [result, setResult] = useState("");
  const convertImageToText = async () => {
    Tesseract.recognize(
      //   "https://tesseract.projectnaptha.com/img/eng_bw.png",
      `${image}`,
      "kor",
      { logger: (m) => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
      setResult(text);
    });
  };

  //   const convertImageToText = async () => {
  //     await worker.load();
  //     await worker.loadLanguage("kor");
  //     await worker.initialize("kor");
  //     const {
  //       data: { text },
  //     } = await worker.recognize(image);
  //     console.log(text);
  //   };

  //   useEffect(() => {
  //     convertImageToText();
  //   }, [image]);

  const handleChange = (e) => {
    // setImage("./img/" + e.target.files[0]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleChange}
      />
      <img src={image} alt="img" width={200} />

      <button onClick={convertImageToText}>OCR</button>
      {`./img/${image}`}
      <h3>{result}</h3>
    </Box>
  );
}
