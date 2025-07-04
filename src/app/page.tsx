'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import MediaModal from "@/components/MediaModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMediaType, setModalMediaType] = useState<'video' | 'image' | null>(null);
  const [modalMediaSrc, setModalMediaSrc] = useState<string | null>(null);

  const openModal = (type: 'video' | 'image', src: string) => {
    setModalMediaType(type);
    setModalMediaSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMediaType(null);
    setModalMediaSrc(null);
  };

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects openModal={openModal} />
        <Interests />
        <Music openModal={openModal} />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
      <MediaModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mediaType={modalMediaType}
        mediaSrc={modalMediaSrc}
      />
    </>
  );
}