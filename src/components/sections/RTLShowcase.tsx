
"use client";

import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  Laptop,
} from "lucide-react";

const PARTO_URL = "https://demo-parto.chbkn.dev/";

export default function PartoMacbookShowcase() {
  const [deviceMode, setDeviceMode] = useState<
    "desktop" | "mobile"
  >("desktop");

  return (
    <section
      id="parto-laptop-showcase"
      dir="rtl"
      className="relative overflow-hidden bg-[#0d0d0d] px-4 py-20 font-sans text-[#F7F5F0] sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C2A8]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#2A2723] bg-[#161513] px-4 py-2 text-[11px] text-[#D8C2A8]">
            <Laptop size={14} />
            پیش‌نمایش زنده قالب پرتو
          </div>

          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            پرتو را از نزدیک تجربه کنید
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#A89F91]">
            طراحی، جزئیات و تجربه کاربری قالب پرتو را
            در نمایش دسکتاپ و موبایل بررسی کنید.
          </p>
        </div>

        {/* Device Stage */}
        <div className="relative mx-auto max-w-4xl">
          {/* Controls */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 px-2">
            <div className="flex items-center gap-2 text-xs text-[#A89F91]">
              <span className="h-2 w-2 rounded-full bg-[#D8C2A8]" />
              فروشگاه اینترنتی پرتو
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-[#2A2723] bg-[#141311] p-1">
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                aria-pressed={deviceMode === "desktop"}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs transition-all ${
                  deviceMode === "desktop"
                    ? "bg-[#D8C2A8] font-semibold text-[#111111]"
                    : "text-[#8C8275] hover:text-white"
                }`}
              >
                <Monitor size={14} />
                دسکتاپ
              </button>

              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                aria-pressed={deviceMode === "mobile"}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs transition-all ${
                  deviceMode === "mobile"
                    ? "bg-[#D8C2A8] font-semibold text-[#111111]"
                    : "text-[#8C8275] hover:text-white"
                }`}
              >
                <Smartphone size={14} />
                موبایل
              </button>
            </div>
          </div>

          {/* Device Frame */}
          <div className="relative mx-auto flex flex-col items-center">
            <div
              className={`relative overflow-hidden border-[5px] border-[#2D2A26] bg-[#111111] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 ${
                deviceMode === "desktop"
                  ? "aspect-[16/10] w-full rounded-t-2xl"
                  : "aspect-[9/18] w-[min(100%,340px)] rounded-[2.5rem] border-[7px]"
              }`}
            >
              {deviceMode === "desktop" ? (
                <div className="flex h-9 items-center justify-between border-b border-[#22201D] bg-[#181614] px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  <div
                    dir="ltr"
                    className="max-w-[65%] truncate rounded-md bg-[#0D0D0D] px-4 py-1 text-[10px] text-[#D8C2A8]"
                  >
                    demo-parto.chbkn.dev
                  </div>

                  <ExternalLink
                    size={13}
                    className="text-[#D8C2A8]/60"
                  />
                </div>
              ) : (
                <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              )}

              {/* Live Website */}
              <div
                className={`relative w-full overflow-hidden bg-[#F7F5F0] ${
                  deviceMode === "desktop"
                    ? "h-[calc(100%-2.25rem)]"
                    : "h-full"
                }`}
              >
                <iframe
                  key={deviceMode}
                  src={PARTO_URL}
                  title="پیش‌نمایش زنده فروشگاه پرتو"
                  loading="lazy"
                  className="h-full w-full border-0 bg-white"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>

            {/* Laptop Base */}
            {deviceMode === "desktop" && (
              <div className="relative mx-auto h-4 w-[105%] max-w-[105%] rounded-b-xl border-t border-[#3A3631] bg-gradient-to-b from-[#25221F] to-[#161513] shadow-2xl">
                <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#111111]" />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#222222] pt-7 sm:flex-row">
            <div>
              <h3 className="text-lg font-medium">
                فروشگاه اینترنتی پرتو
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-7 text-[#A89F91]">
                قالب فروشگاهی فارسی و راست‌به‌چپ،
                توسعه‌یافته با Next.js، TypeScript
                و Tailwind CSS.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "GSAP"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#2A2723] bg-[#141311] px-3 py-1 text-[10px] text-[#D8C2A8]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href={PARTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D8C2A8] px-6 py-3 text-xs font-semibold text-[#111111] transition-all duration-300 hover:bg-[#F7F5F0]"
            >
              مشاهده نسخه زنده پرتو
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
