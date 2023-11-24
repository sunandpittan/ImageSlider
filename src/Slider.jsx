import { useState } from "react";
import { Form } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipMgwTINZonkSD7SStQYLN0v-CdGFj8XyKVEpaUz=w810-h468-n-k-no",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipN5gz_v-wuTGZrN-vPwEmpi5fSG5VxoWfMaNWAo=w810-h468-n-k-no",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipMTFXa5GXoGnLvxEeCcghb60oQ7EnreqgR9ACMl=w810-h468-n-k-no",
  },
  {
    url: "https://lh5.googleusercontent.com/p/AF1QipNpT3t7Lx61s4C1BH4pWlw1-oe9-_95pvwe4wjb=w810-h468-n-k-no",
  },
];
export default function Slider() {
  const [transspeed, setTransspeed] = useState(0.5);

  return (
    <div className="mx-auto mt-2 shadow" style={{ width: "810px" }}>
      <SimpleImageSlider
        width={"810px"}
        height={"468px"}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={transspeed}
        style={{}}
      />
      <div className="w-50 mx-auto">
        <Form.Label>Transition speed:</Form.Label>
        <Form.Range
          value={transspeed}
          max={10}
          onChange={(e) => setTransspeed(e.target.value)}
        />
        <Form.Label>{transspeed}</Form.Label>
      </div>
    </div>
  );
}
