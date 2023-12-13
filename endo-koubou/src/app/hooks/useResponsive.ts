import { useState, useEffect } from "react";

type DeviceType = "pc" | "sp";

const useResponsive = (desiredDevice: DeviceType): boolean => {
  const [isDesiredDevice, setIsDesiredDevice] = useState(false);

  useEffect(() => {
    const determineDevice = () => {
      if (window.innerWidth <= 1000 && desiredDevice === "sp") {
        setIsDesiredDevice(true);
      } else if (window.innerWidth > 1000 && desiredDevice === "pc") {
        setIsDesiredDevice(true);
      } else {
        setIsDesiredDevice(false);
      }
    };

    // 初回のデバイス判定
    determineDevice();

    // ウィンドウサイズが変わったときのリスナーを設定
    window.addEventListener("resize", determineDevice);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("resize", determineDevice);
    };
  }, [desiredDevice]);

  return isDesiredDevice;
};

export default useResponsive;
