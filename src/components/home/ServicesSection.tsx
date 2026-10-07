"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BsBoxSeam,
  BsHeadset,
  BsFileEarmarkCheck,
  BsAirplane,
  BsWater,
  BsTruck,
  BsTag,
  BsMortarboard,
  BsChevronLeft,
  BsChevronRight,
  BsArrowRight,
} from "react-icons/bs";

import { useLanguage } from "@/context/LanguageContext";

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  badge: string;
  summary: React.ReactNode;
  highlights: string[];
}

const serviceIcons: React.ReactNode[] = [
  <BsBoxSeam key="1" className="text-itsma-red fs-2" />,
  <BsHeadset key="2" className="text-itsma-red fs-2" />,
  <BsFileEarmarkCheck key="3" className="text-itsma-red fs-2" />,
  <BsAirplane key="4" className="text-itsma-red fs-2" />,
  <BsWater key="5" className="text-itsma-red fs-2" />,
  <BsTruck key="6" className="text-itsma-red fs-2" />,
  <BsTag key="7" className="text-itsma-red fs-2" />,
  <BsMortarboard key="8" className="text-itsma-red fs-2" />,
  <BsBoxSeam key="9" className="text-itsma-red fs-2" />,
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const servicesData: ServiceItem[] = t.services.items.map((item, idx) => ({
    ...item,
    icon: serviceIcons[idx] || serviceIcons[0],
  }));
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const total = servicesData.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Auto-play carousel, paused when hovered OR when modal is open
  useEffect(() => {
    if (isPaused || activeModalService !== null) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, activeModalService]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalService]);

  // Compute precise 3D transform relative to active index
  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around circular index
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    // Center Active Card
    if (diff === 0) {
      return {
        transform: "translate(-50%, -50%) scale(1.05)",
        left: "50%",
        top: "50%",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    }

    // Neighbors (diff = -1 or +1)
    if (absDiff === 1) {
      const leftPercent = diff < 0 ? "20%" : "80%";
      return {
        transform: "translate(-50%, -50%) scale(0.9)",
        left: leftPercent,
        top: "50%",
        opacity: 0.78,
        filter: "blur(1.5px)",
        zIndex: 5,
        pointerEvents: "auto" as const,
      };
    }

    // Outer Cards (diff = -2 or +2)
    if (absDiff === 2) {
      const leftPercent = diff < 0 ? "-5%" : "105%";
      return {
        transform: "translate(-50%, -50%) scale(0.78)",
        left: leftPercent,
        top: "50%",
        opacity: 0.35,
        filter: "blur(4.5px)",
        zIndex: 2,
        pointerEvents: "auto" as const,
      };
    }

    // Hidden cards off-screen
    const leftPercent = diff < 0 ? "-30%" : "130%";
    return {
      transform: "translate(-50%, -50%) scale(0.65)",
      left: leftPercent,
      top: "50%",
      opacity: 0,
      filter: "blur(8px)",
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  };

  return (
    <section id="servicios" className="position-relative bg-white py-5 overflow-hidden">
      <div className="py-lg-4 container">
        {/* Section Header with generous bottom margin to prevent overlap */}
        <div className="mx-auto mb-5 pb-3 max-w-3xl text-center">
          <div className="mb-2 red-line-accent" />
          <h2 className="mb-3 font-serif text-dark display-6 fw-bold">
            {t.services.title}
          </h2>
        </div>

        {/* 3D Focus Blur Carousel Viewport with explicit height */}
        <div
          className="position-relative my-4 w-100"
          style={{ height: "420px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Loop */}
          {servicesData.map((item, idx) => {
            const cardStyle = getCardStyle(idx);
            const isCenter = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className="position-absolute cursor-pointer"
                style={{
                  width: "320px",
                  height: "370px",
                  transition:
                    "all 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
                  ...cardStyle,
                }}
              >
                <div
                  className={`${isCenter ? "itsma-red-card" : "itsma-red-card-nh opacity-75"
                    } p-4 d-flex flex-column justify-content-between h-100`}
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-3 text-center">
                      <div
                        className={`d-inline-flex align-items-center justify-content-center p-3 rounded-circle border ${isCenter ? "border-danger bg-danger-subtle" : "border-secondary-subtle bg-light"
                          }`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h5
                      className={`fw-bold text-center mb-2 fs-5 ${isCenter ? "text-itsma-red" : "text-dark"
                        }`}
                      style={{ minHeight: "2.8rem" }}
                    >
                      {item.title}
                    </h5>

                    {/* Summary */}
                    <p className="mb-0 text-secondary text-center small lh-base">
                      {item.summary}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 border-light border-top text-center">
                    <button
                      disabled={!isCenter}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCenter) {
                          setActiveModalService(item);
                        }
                      }}
                      className={`btn btn-sm w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 ${isCenter ? "btn-danger" : "btn-outline-secondary opacity-50 pe-none"
                        }`}
                    >
                      {t.services.learnMore}
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Red Arrow Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow-lg p-2 border border-danger rounded-circle text-itsma-red translate-middle-y start-0 btn btn-light"
            style={{ width: "44px", height: "44px", zIndex: 30, left: "5px" }}
            aria-label="Anterior Servicio"
          >
            <BsChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow-lg p-2 border border-danger rounded-circle text-itsma-red translate-middle-y end-0 btn btn-light"
            style={{ width: "44px", height: "44px", zIndex: 30, right: "5px" }}
            aria-label="Siguiente Servicio"
          >
            <BsChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Pagination Dots placed right below cards */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-3 pt-1">
          {servicesData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`carousel-dot-red ${activeIndex === dotIdx ? "active" : ""}`}
              aria-label={`Ver servicio ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div
          className="d-block modal fade show"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 1060 }}
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="shadow-lg border-0 rounded-4 modal-content">
              <div className="bg-light p-4 border-bottom modal-header">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white p-3 border border-danger rounded-3">
                    {activeModalService.icon}
                  </div>
                  <div>

                    <h4 style={{ color: "linear-gradient(225deg, #FD0004 0%, #A20A3A 70.67%)" }} className="mb-0 modal-title fw-bold">
                      {activeModalService.title}
                    </h4>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveModalService(null)}
                  aria-label={t.nav.cerrar}
                />
              </div>

              <div className="p-4 p-md-5 modal-body">
                <h6 className="mb-2 text-dark fw-bold">{t.services.modalSummaryTitle}</h6>
                <p className="mb-4 text-secondary lead fs-6 lh-lg">
                  {activeModalService.summary}
                </p>

                <h6 className="mb-3 text-dark fw-bold">{t.services.modalHighlightsTitle}</h6>
                <div className="mb-4 row g-3">
                  {activeModalService.highlights.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="d-flex align-items-center gap-2 bg-light p-3 border border-light rounded-3">
                        <span className="text-danger fw-bold fs-5">•</span>
                        <span className="text-dark fw-medium small">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center justify-content-between bg-secondary-subtle mb-0 p-4 rounded-3">
                  <div>
                    <h6 className="mb-1 fw-bold">{t.services.modalCtaTitle}</h6>
                    <small>{t.services.modalCtaSubtitle}</small>
                  </div>
                  <Link href="/Contacto" onClick={() => setActiveModalService(null)} className="px-3 btn btn-danger btn-sm fw-semibold">
                    {t.services.modalContactBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
