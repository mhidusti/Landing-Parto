
import React from "react";

export default function PartoMacbookShowcase() {
  return (
    <section
      id="parto-laptop-showcase"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#090909] px-4 py-24 text-[#F1EDE5] sm:px-8 lg:px-12 lg:py-32"
    >
      <style>{`
        @keyframes partoAmbient {
          0%, 100% { opacity: .35; transform: scale(.92); }
          50% { opacity: .7; transform: scale(1.08); }
        }

        @keyframes partoEnter {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes partoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes partoShine {
          0% { transform: translateX(120%) rotate(20deg); }
          100% { transform: translateX(-120%) rotate(20deg); }
        }

        .parto-ambient {
          animation: partoAmbient 8s ease-in-out infinite;
        }

        .parto-enter {
          animation: partoEnter 1.1s cubic-bezier(.2,.7,.2,1) both;
        }

        .parto-float {
          animation: partoFloat 6s ease-in-out infinite;
        }

        .parto-shine {
          animation: partoShine 9s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A98A65]/[0.09] blur-[160px]" />
      <div className="parto-ambient pointer-events-none absolute left-[12%] top-[20%] -z-10 h-72 w-72 rounded-full bg-[#B99B77]/[0.08] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl">

          {/* Laptop screen */}
          <div className="relative overflow-hidden rounded-t-[16px] border-[5px] border-[#302D29] bg-[#11100F] shadow-[0_40px_120px_-25px_rgba(0,0,0,.95)] sm:rounded-t-[22px] sm:border-[7px]">

            {/* Camera */}
            <div className="absolute left-1/2 top-0 z-30 h-2 w-10 -translate-x-1/2 rounded-b-lg bg-[#24211E]" />

            <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE8DE] text-[#29251F] sm:aspect-[16/9]">

              {/* Screen background */}
              <div className="absolute inset-0 bg-[linear-gradient(125deg,#F8F6F0_0%,#F0ECE3_48%,#E4DCCE_100%)]" />

              {/* Light effects */}
              <div className="parto-ambient absolute left-[35%] top-[5%] h-[70%] w-[55%] rounded-full bg-[#C5A47B]/25 blur-[100px]" />
              <div className="absolute -left-[12%] -top-[35%] h-[90%] w-[55%] rounded-full border border-[#A88C6B]/15" />
              <div className="absolute -left-[7%] -top-[25%] h-[75%] w-[45%] rounded-full border border-[#A88C6B]/20" />

              {/* Frame */}
              <div className="absolute inset-[3.5%] border border-[#9B876D]/25" />

              {/* Decorative corner marks */}
              <div className="absolute left-[3.5%] top-[3.5%] h-5 w-5 border-l border-t border-[#A88C6B]/60" />
              <div className="absolute right-[3.5%] top-[3.5%] h-5 w-5 border-r border-t border-[#A88C6B]/60" />
              <div className="absolute bottom-[3.5%] left-[3.5%] h-5 w-5 border-b border-l border-[#A88C6B]/60" />
              <div className="absolute bottom-[3.5%] right-[3.5%] h-5 w-5 border-b border-r border-[#A88C6B]/60" />

              {/* Oversized background typography */}
              <div
                dir="rtl"
                className="pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(90px,19vw,250px)] font-black leading-none tracking-[-.09em] text-[#B7A58B]/[0.10]"
              >
                پرتو
              </div>

              {/* Main content */}
              <div className="parto-enter absolute inset-[9%] flex flex-col justify-between">

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#A88B69]" />
                    <span className="text-[8px] tracking-[.38em] text-[#927B5F] sm:text-[10px]">
                      THE ART OF ELEGANCE
                    </span>
                  </div>

                  <span className="font-serif text-[11px] tracking-[.32em] text-[#796B59] sm:text-sm">
                    PARTO
                  </span>
                </div>

                {/* Center composition */}
                <div className="relative flex flex-1 items-center">

                  {/* Right typography */}
                  <div className="relative z-10 w-[72%] pt-2 sm:w-[65%]">

                    <div className="mb-4 flex items-center gap-3 sm:mb-7">
                      <span className="text-[8px] tracking-[.3em] text-[#A48765] sm:text-[10px]">
                        A NEW PERSPECTIVE
                      </span>
                      <span className="h-px w-8 bg-[#B99B77]/60" />
                    </div>

                    <h2 className="text-[clamp(23px,4.5vw,59px)] font-light leading-[1.85] tracking-tight text-[#302A23]">
                      زیبایی،
                      <br />
                      <span className="relative inline-block font-medium text-[#A0835F]">
                        به روایتِ پرتو
                        <span className="absolute -bottom-1 right-0 h-px w-[85%] bg-gradient-to-l from-[#A0835F] to-transparent sm:-bottom-2" />
                      </span>
                    </h2>

                    <p className="mt-5 max-w-[300px] text-[9px] leading-7 text-[#827665] sm:mt-8 sm:text-xs sm:leading-8">
                      برای لحظه‌هایی که ساده می‌گذرند،
                      <br className="hidden sm:block" />
                      اما زیبا در خاطر می‌مانند.
                    </p>

                    <div className="mt-6 flex items-center gap-3 sm:mt-9">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#A98A65]/50 text-[11px] text-[#9B7D5A]">
                        ↗
                      </span>
                      <span className="text-[8px] tracking-[.2em] text-[#8B785F] sm:text-[10px]">
                        DISCOVER THE BEAUTY
                      </span>
                    </div>
                  </div>

                  {/* Decorative jewel-inspired geometry */}
                  <div className="parto-float absolute left-[4%] top-1/2 flex h-[clamp(100px,20vw,230px)] w-[clamp(100px,20vw,230px)] -translate-y-1/2 items-center justify-center">

                    <div className="absolute inset-0 rotate-45 border border-[#A98A65]/30" />
                    <div className="absolute inset-[12%] rotate-45 border border-[#A98A65]/40" />
                    <div className="absolute inset-[25%] rounded-full border border-[#A98A65]/35" />
                    <div className="absolute inset-[34%] rotate-45 border border-[#A98A65]/50" />

                    <div className="relative flex h-[38%] w-[38%] rotate-45 items-center justify-center border border-[#A98A65]/60 bg-gradient-to-br from-[#FBF8F0] via-[#DCCBB1] to-[#A98A65]/30 shadow-[0_0_45px_rgba(169,138,101,.2)]">
                      <div className="h-[55%] w-[55%] border border-white/70" />
                    </div>

                    <span className="absolute -right-2 top-[10%] h-1.5 w-1.5 rounded-full bg-[#A98A65]" />
                    <span className="absolute -bottom-1 left-[20%] h-1 w-1 rounded-full bg-[#A98A65]" />
                  </div>
                </div>

                {/* Bottom editorial details */}
                <div className="flex items-end justify-between border-t border-[#A98A65]/25 pt-4 sm:pt-5">
                  <div>
                    <span className="block text-[7px] tracking-[.3em] text-[#A18A6D] sm:text-[9px]">
                      OBJECTS OF LIGHT
                    </span>
                    <span className="mt-1 block text-[7px] text-[#9A8D7A] sm:text-[9px]">
                      زیبایی در جزئیات معنا می‌شود
                    </span>
                  </div>

                  <div className="text-left">
                    <span className="block text-[7px] tracking-[.25em] text-[#A18A6D] sm:text-[9px]">
                      EST. 2026
                    </span>
                    <span className="mt-1 block text-[7px] text-[#9A8D7A] sm:text-[9px]">
                      VOL. 01 — PARTO
                    </span>
                  </div>
                </div>
              </div>

              {/* Soft light sweep */}
              <div className="parto-shine pointer-events-none absolute -inset-y-[40%] left-0 w-[18%] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl" />
            </div>
          </div>

          {/* Laptop base */}
          <div className="relative mx-auto h-3 w-[106%] -translate-x-[2.8%] rounded-b-[50%] border-t border-[#514B43] bg-gradient-to-b from-[#38342F] via-[#24211E] to-[#151412] shadow-[0_18px_35px_rgba(0,0,0,.65)] sm:h-5">
            <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-lg bg-[#171513] sm:w-28" />
          </div>

        </div>
      </div>
    </section>
  );
}
