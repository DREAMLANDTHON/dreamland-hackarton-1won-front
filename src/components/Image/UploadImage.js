import { useCallback, useRef, useState } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../Firebase/firebase";

import { Button, ImageListItem, ImageListItemBar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import compressedFile from "./compressFile";

export function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

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
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File available at", downloadURL);

          setImageUrl(downloadURL);
        });
      }
    );
  };

  return (
    <>
      <Button
        onClick={onUploadImageButtonClick}
        variant="outlined"
        sx={{
          backgroundColor: "background.default",
          borderColor: "primary.main",
          color: "primary.main",
          fontWeight: "normal",
          mt: "20px",
        }}
      >
        인증샷 업로드
      </Button>

      <input
        hidden
        type="file"
        // accept="image/*"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif"
        ref={inputRef}
        onChange={onImageChange}
      />
      <h1>{imageUrl}</h1>
    </>
  );
}
