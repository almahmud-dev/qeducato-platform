"use client";
import { useState, useCallback } from "react";

export function useGalleryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [allAlbums, setAllAlbums] = useState([]);

  const openModal = useCallback((album, albums) => {
    setActiveAlbum(album);
    setAllAlbums(albums);
    setAlbumIndex(albums.findIndex((a) => a.id === album.id));
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setActiveAlbum(null);
  }, []);

  const goNextAlbum = useCallback(() => {
    setAlbumIndex((prev) => {
      const next = (prev + 1) % allAlbums.length;
      setActiveAlbum(allAlbums[next]);
      return next;
    });
  }, [allAlbums]);

  const goPrevAlbum = useCallback(() => {
    setAlbumIndex((prev) => {
      const next = (prev - 1 + allAlbums.length) % allAlbums.length;
      setActiveAlbum(allAlbums[next]);
      return next;
    });
  }, [allAlbums]);

  return {
    isOpen,
    activeAlbum,
    albumIndex,
    allAlbums,
    openModal,
    closeModal,
    goNextAlbum,
    goPrevAlbum,
  };
}