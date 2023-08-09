import { useHistory } from "react-router-dom";

function Camera({ takePictureRef, model }) {
  const history = useHistory();

  const onImageChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const image = new Image();

    reader.onload = async () => (image.src = reader.result);
    image.onload = async () => {
      const prediction = await model.predict(image, false);

      prediction.sort(
        (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
      );
      history.push(`/Product/${prediction[0].className}`);
    };
    // start reading the file
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ display: "none" }} className="container">
      <input
        type="file"
        id="take-picture"
        accept="image/jpg, image/jpeg, image/png, image/bmp"
        ref={takePictureRef}
        onChange={onImageChange}
      />
    </div>
  );
}

export default Camera;
