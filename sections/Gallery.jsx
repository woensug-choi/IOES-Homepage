// import { useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import getImages from "../utils/getphoto";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  // const t = useTranslations("Gallery");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    async function fetchImages() {
      const imageFiles = await getImages();
      const imageObjects = imageFiles.map((filename, _) => ({
        public_id: `/album/${filename}`,
        filename,
        tags: [], // Add any tags if necessary
      }));
      setImages(imageObjects.reverse());
    }
    fetchImages();
  }, []);

  function formatDate(filename) {
    const year = filename.substring(0, 4);
    const month = parseInt(filename.substring(4, 6), 10);
    const day = parseInt(filename.substring(6, 8), 10);
    return `${year}/${month}/${day}`;
  }

  function openModal(image) {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  function showNextImage() {
    setIsLoading(true);
    const currentIndex = images.findIndex(
      (img) => img.public_id === selectedImage.public_id
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  }

  function showPrevImage() {
    setIsLoading(true);
    const currentIndex = images.findIndex(
      (img) => img.public_id === selectedImage.public_id
    );
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  }

  function handleScrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }

  function handleScrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.4, 1)}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} flex mx-auto w-full flex-col gap-8`}
    >
      <div className="flex flex-col gap-8 pb-4 w-full">
        <div className="flex w-full">
          <button className="z-10 p-2 text-white" onClick={handleScrollLeft}>
            <ChevronLeft size={30} />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide w-full"
          >
            {images.map(({ public_id, filename }, index) => (
              <Image
                src={public_id}
                key={index}
                alt={filename}
                width="200"
                height="100"
                className="rounded-md cursor-pointer flex-shrink-0"
                onClick={() => openModal({ public_id, filename })}
              />
            ))}
          </div>
          <button className="z-10 p-2 text-white" onClick={handleScrollRight}>
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex-col flex items-center justify-center">
          <div className="flex items-center justify-center ">
            <button
              className="absolute left-5 m-4 text-white hidden lg:block"
              onClick={showPrevImage}
            >
              <ChevronLeft size={50} />
            </button>
            <div className="relative">
              <button
                className="hidden lg:block absolute top-5 right-5 text-white bg-black bg-opacity-75 rounded-lg p-3 font-bold"
                onClick={closeModal}
              >
                Close
              </button>
              <Image
                src={selectedImage.public_id}
                alt={selectedImage.filename}
                width="1200"
                height="1000"
                className="rounded-md w-full max-w-screen-lg"
                onLoad={() => setIsLoading(false)}
                onClick={closeModal}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="spinner"></div>
                </div>
              )}
              <p className="absolute top-5 left-5 text-white bg-black bg-opacity-75 rounded-lg p-2">
                {formatDate(selectedImage.filename.split(".")[0].split("-")[0])}
              </p>
            </div>
            <button
              className="absolute right-5 m-4 text-white hidden lg:block"
              onClick={showNextImage}
            >
              <ChevronRight size={50} />
            </button>
          </div>
          <div className="absolute bottom-20 flex items-center lg:hidden justify-center bg-black bg-opacity-75 rounded-xl border-2 border-white/10">
            <button className="m-2 text-white" onClick={showPrevImage}>
              <ChevronLeft size={50} />
            </button>
            <p className="text-white font-bold mx-10 cursor-pointer" onClick={closeModal}>
              Close
            </p>
            <button className="m-2 text-white" onClick={showNextImage}>
              <ChevronRight size={50} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Gallery;
