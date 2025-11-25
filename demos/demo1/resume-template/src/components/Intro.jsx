import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaDownload, FaFolderOpen } from "react-icons/fa";

export default function Intro({
  name = "علی ذوالفقاری",
  role = "Front-end Developer",
  img = "/mnt/data/A_wireframe_layout_in_black_and_white_showcases_a_.png", // عکس آپلود‌شده
}) {
  const rootRef = useRef(null);
  const avatarRef = useRef(null);
  const glowRef = useRef(null);
  const maxIntensity = 0.35;
  const minIntensity = 0.1;

  const maxRadius = 420;
  const minRadius = 260;

  useEffect(() => {
    const btn = document.getElementById("projects-magnetic");

    if (!btn) return;

    const strength = 20;
    const tiltStrength = 20;
    const scaleOnHover = 1.07;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();

      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      const deltaX = e.clientX - btnX;
      const deltaY = e.clientY - btnY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 180) {
        // Factor for tilt based on cursor distance
        const tiltX = (deltaY / rect.height) * tiltStrength;
        const tiltY = -(deltaX / rect.width) * tiltStrength;

        gsap.to(btn, {
          x: (deltaX / rect.width) * strength,
          y: (deltaY / rect.height) * strength,
          rotateX: tiltX,
          rotateY: tiltY,
          scale: scaleOnHover,
          transformPerspective: 800,
          transformOrigin: "center",
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.45,
          ease: "elastic.out(1,0.4)",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.45,
        ease: "elastic.out(1,0.4)",
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const btn = document.getElementById("projects-magnetic");

    if (!btn) return;

    const strength = 20;
    const scaleonHover = 1.07;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();

      const btnx = rect.left + rect.width / 2;
      const btny = rect.top + rect.height / 2;

      const deltaX = e.clientX - btnx;
      const deltaY = e.clientY - btny;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 180) {
        gsap.to(btn, {
          x: (deltaX / rect.width) * strength,
          y: (deltaY / rect.height) * strength,
          scale: scaleonHover,
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1,0.4)",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1,0.4)",
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const btn = document.getElementById("morph-btn");

    // Morph Animation
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        borderRadius: "30px",
        scale: 1.08,
        boxShadow:
          "0 0 25px rgba(147,51,234,0.6), 0 0 60px rgba(147,51,234,0.4)",
        background: "linear-gradient(90deg, #7c3aed, #a855f7)",
        duration: 0.35,
        ease: "elastic",
      });

      gsap.to("#morph-btn svg", {
        x: -4,
        duration: 0.3,
        ease: "elastic",
      });
    });

    // Reverse
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        borderRadius: "14px",
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        background: "linear-gradient(90deg, #6d28d9, #7c3aed)",
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to("#morph-btn svg", {
        x: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    });
  }, []);

  const distance = (x1, y1, x2, y2) => {
    Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  useEffect(() => {
    const glow = glowRef.current;
    const avatar = avatarRef.current;

    if (!glow || avatar) return;

    const handleMove = (e) => {
      if (window.innerWidth < 800) return;

      const mousex = e.clientX;
      const mousey = e.clientY;

      const rect = avatar.getBoundingClientReact();
      const avatarx = rect.left + rect.width / 2;
      const avatary = rect.top + rect.height / 2;

      const dist = Math.sqrt((mousex - avatarx) ** 2 + (mousey - avatary) ** 2);

      const norm = Math.min(dist / 350, 1);

      const inensity = (1 - norm) * 0.35 + 0.1;

      const radius = (1 - norm) * 420 + 260;

      gsap.to(glow, {
        background: `
        radial-gradiant(
        ${radius}px circle at ${mousex}px ${mousey}px,
        rgba(124,58,237,${inensity})),
        transparent 70%
      )
        `,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousedown", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll(".intro-btn");

    gsap.fromTo(
      buttons,
      { boxShadow: "0 0 0px rgba(124,58,237,0.0)" },
      {
        boxShadow:
          "0 0 18px rgba(124,58,237,0.25), 0 0 48px rgba(124,58,237,0.18)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
  }, []);

  useEffect(() => {
    const avatar = avatarRef.current;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 800) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerWidth - 0.5) * 12;

      gsap.to(avatar, {
        x: x,
        y: y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Avatar breathing neon
      gsap.fromTo(
        avatarRef.current,
        { boxShadow: "0 0 0px rgba(124,58,237,0.0)" },
        {
          boxShadow: "0 16px 55px rgba(124,58,237,0.20)",
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // Title
      gsap.fromTo(
        ".intro-title",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );

      // Role
      gsap.fromTo(
        ".intro-role",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: "power3.out" }
      );

      // Buttons
      gsap.fromTo(
        ".intro-btn",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay: 0.25,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full bg-[#07060a] text-right py-16 px-6"
      dir="rtl"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0 }}
      ></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* RIGHT – Text */}
        <div className="space-y-5 order-2 md:order-1">
          <h1 className="intro-title text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
            {name}
          </h1>

          <h2 className="intro-role text-xl md:text-2xl font-bold text-slate-300">
            {role}
          </h2>

          <div className="flex gap-6 mt-4">
            {/* Resume Button */}
            <a
              id="morph-btn"
              className="
    intro-btn 
    relative 
    inline-flex items-center gap-3 
    px-6 py-3  
    text-white 
    rounded-xl
    bg-gradient-to-r from-[#6d28d9] to-[#7c3aed]
    overflow-hidden
    cursor-pointer
  "
            >
              <FaDownload className="text-lg" />
              دانلود رزومه
            </a>

            {/* Projects Button */}
            <a
              href="#projects"
              id="projects-magnetic"
              className="intro-btn inline-flex items-center gap-6 px-6 py-3
    rounded-xl border border-white/10 text-white
    bg-white/5 backdrop-blur-md hover:bg-white/10 
    transition shadow-[0_8px_25px_rgba(255,255,255,0.04)]"
            >
              <FaFolderOpen />
              مشاهده پروژه‌ها
            </a>
          </div>
        </div>

        {/* LEFT – Avatar */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div
            ref={avatarRef}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/8"
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={img}
              alt="profile"
              className="w-full h-full object-cover"
            />

            {/* Neon rim */}
            <span
              className="absolute -inset-0.5 rounded-full pointer-events-none"
              style={{
                boxShadow: "0 0 40px rgba(124,58,237,0.25)",
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
