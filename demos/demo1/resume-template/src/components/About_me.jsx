import React, { useEffect, useRef } from "react";
import { FaUser, FaUniversity, FaBullseye, FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";

/**
 * Dark Glass + Neon About Me
 * - profileSrc default points to the uploaded file (local path)
 * - Use profileSrc="/assets/profile.jpg" when moving image to public folder for production
 */

export default function AboutMe({
  age = "21",
  university = "دانشگاه XYZ",
  careerGoal = "Front-end Developer",
  // <-- the uploaded file path (local). Replace with production path when needed.
  profileSrc = "/mnt/data/A_wireframe_layout_in_black_and_white_showcases_a_.png",
}) {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);
  const avatarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle avatar breathing glow (looping)
      gsap.fromTo(
        avatarRef.current,
        { boxShadow: "0 0 0px rgba(99,102,241,0.0)" },
        {
          boxShadow: "0 16px 60px rgba(99,102,241,0.18)",
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // header (title + text)
      gsap.fromTo(
        ".about-head",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // cards appear with a neon pop
      gsap.fromTo(
        cardsRef.current,
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="w-full py-12 px-6 bg-[#07060a] text-right" dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ====== LEFT: text (on desktop this is right visually due to RTL) ====== */}
        <div className="about-head space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
            درباره من
          </h2>

          <p className="text-slate-300 text-lg leading-7 max-w-xl">
            من توسعه‌دهندهٔ فرانت‌اند هستم؛ تمرکزم روی ساخت رابط‌های کاربری سریع،
            مدرن و چشم‌نواز است. ترکیب گلس، نورپردازی و انیمیشن‌های نرم باعث می‌شود
            تجربهٔ کاربری بصری و اثرگذار ایجاد شود.
          </p>

          <div className="flex items-center gap-4 mt-4">

            <div className="flex gap-2">
              <a className="p-3 rounded-lg bg-white/6 hover:bg-white/10 transition" href="#">
                <FaLinkedin className="text-white" />
              </a>
              <a className="p-3 rounded-lg bg-white/6 hover:bg-white/10 transition" href="#">
                <FaGithub className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* ====== RIGHT: avatar + cards (in grid) ====== */}
        <div className="grid grid-cols-1 gap-6">
          {/* Avatar (top-right in original) */}
          

          {/* Cards row: using three cards in one row for desktop (grid handles responsive stacking) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card A: Career Goal (neon pink/orange) */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="relative rounded-xl p-4 md:p-6 overflow-hidden transform transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(255,94,109,0.12), rgba(255,165,92,0.10))",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 30px rgba(99,102,241,0.06)",
              }}
            >
              <div className="absolute -inset-10 blur-3xl rounded-full pointer-events-none"
                   style={{ background: "radial-gradient(circle at 10% 20%, rgba(255,94,109,0.12), transparent 20%)" }} />
              <div className="relative z-10 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-white/8">
                    <FaBullseye className="text-lg text-white/90" />
                  </div>
                  <span className="text-sm text-white/80">هدف شغلی</span>
                </div>

                <div className="text-lg md:text-xl font-bold text-white">{careerGoal}</div>
                <p className="mt-2 text-xs text-white/70">ساخت رابط‌های کاربری سریع و مؤثر</p>
              </div>
            </div>

            {/* Card B: University (neon blue) */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="relative rounded-xl p-4 md:p-6 overflow-hidden transform transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(124,58,237,0.06))",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 30px rgba(59,130,246,0.05)",
              }}
            >
              <div className="absolute -inset-8 blur-3xl rounded-full pointer-events-none"
                   style={{ background: "radial-gradient(circle at 90% 10%, rgba(59,130,246,0.10), transparent 30%)" }} />
              <div className="relative z-10 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-white/8">
                    <FaUniversity className="text-lg text-white/90" />
                  </div>
                  <span className="text-sm text-white/80">دانشگاه</span>
                </div>

                <div className="text-lg md:text-xl font-bold text-white">{university}</div>
                <p className="mt-2 text-xs text-white/70">رشته و فعالیت‌های دانشگاهی</p>
              </div>
            </div>

            {/* Card C: Age (neon purple) */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="relative rounded-xl p-4 md:p-6 overflow-hidden transform transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.10), rgba(168,85,247,0.08))",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 30px rgba(168,85,247,0.06)",
              }}
            >
              <div className="absolute -inset-10 blur-3xl rounded-full pointer-events-none"
                   style={{ background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.10), transparent 30%)" }} />
              <div className="relative z-10 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-white/8">
                    <FaUser className="text-lg text-white/90" />
                  </div>
                  <span className="text-sm text-white/80">سن</span>
                </div>

                <div className="text-2xl md:text-3xl font-extrabold text-white">{age}</div>
                <p className="mt-2 text-xs text-white/70">تجربه، رشد و آموزش</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
