import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Tesseract, { createWorker } from "tesseract.js";
import Camera from "../components/Camera";
import Photo from "../components/Photo";

export default function OCR() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* <Camera /> */}
      <Camera />
    </Box>
  );
}
