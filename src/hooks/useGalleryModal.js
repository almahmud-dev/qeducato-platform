"use client";
import { useState, useEffect, useCallback } from "react";

export function useGalleryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allAlbums, setAllAlbums] = useState([]);

  const openModal = useCallback((album, albums) => {
    setActiveAlbum(album);
    setAllAlbums(albums);
    setActiveIndex(albums.findIndex((a) => a.id === album.id));
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setActiveAlbum(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % allAlbums.length;
      setActiveAlbum(allAlbums[next]);
      return next;
    });
  }, [allAlbums]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev - 1 + allAlbums.length) % allAlbums.length;
      setActiveAlbum(allAlbums[next]);
      return next;
    });
  }, [allAlbums]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal, goNext, goPrev]);

  return {
    isOpen,
    activeAlbum,
    activeIndex,
    allAlbums,
    openModal,
    closeModal,
    goNext,
    goPrev,
  };
}