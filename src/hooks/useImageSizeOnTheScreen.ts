import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    setIsLoading(false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, isLoading };
};

export const useImageSizeOnTheScreen = (
  originalWidth: number,
  originalHeight: number,
  ratio: number,
) => {
  const { windowSize } = useWindowSize();

  const naturalWidth = originalWidth;
  const naturalHeight = originalHeight;
  const windowRatio = windowSize.width / windowSize.height;
  const imageRatio = naturalWidth / naturalHeight;
  let width, height;

  if (windowRatio > imageRatio) {
    height = windowSize.height;
    width = height * imageRatio;
  } else {
    width = windowSize.width;
    height = width / imageRatio;
  }

  height *= ratio;
  width = height * imageRatio;

  return [Math.round(width), Math.round(height)];
};
