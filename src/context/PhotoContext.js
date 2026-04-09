import React, { createContext, useState, useEffect, useCallback } from "react";
import { getImagesFromSearchTerm } from "../api";

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = useCallback(async (query) => {
    if (!query) return; // skip empty
    setLoading(true);
    try {
      const response = await getImagesFromSearchTerm(query);
      const imagesData = response.map((image) => ({
        id: image.id,
        fullImageUrl: image.urls.full,
        smallImageUrl: image.urls.small,
        title: image.description || image.alt_description || "Untitled",
      }));
      setImages(imagesData);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load default images on mount
  useEffect(() => {
    runSearch("nature");
  }, [runSearch]);

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
