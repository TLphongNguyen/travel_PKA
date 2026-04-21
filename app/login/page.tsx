"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-[450px] glacier-glass rounded-[20px] p-10 flex flex-col items-center gap-8 shadow-2xl border-white/10">
      {/* Header */}
      <header className="text-center w-full">
        <h1 className="text-[32px] font-bold tracking-[0.05em] text-glacier-primary uppercase mb-2 glacier-text-glow">
          PKA Travel
        </h1>
        <p className="text-base text-glacier-on-surface/80">
          Chào mừng trở lại. Hãy đăng nhập.
        </p>
      </header>

      {/* Social Login */}
      <div className="w-full grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-white group-hover:scale-110 transition-transform"
          >
            <path
              fill="currentColor"
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.152 1.152-2.96 2.416-6.392 2.416-5.464 0-9.84-4.424-9.84-9.84s4.376-9.84 9.84-9.84c2.936 0 5.12 1.152 6.696 2.616l2.312-2.312C18.912 2.016 16.192 0 12.48 0 5.584 0 0 5.584 0 12.48s5.584 12.48 12.48 12.48c3.752 0 6.592-1.24 8.776-3.528 2.272-2.272 2.992-5.456 2.992-8.08 0-.792-.08-1.536-.216-2.24H12.48z"
            />
          </svg>
          <span className="text-sm font-semibold text-white">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-white group-hover:scale-110 transition-transform"
          >
            <path
              fill="currentColor"
              d="M17.05 20.28c-.96.95-2.06 2.15-3.45 2.15-1.34 0-1.77-.85-3.32-.85-1.54 0-2.03.83-3.3.83-1.28 0-2.43-1.17-3.41-2.15C1.57 18.26 0 15.3 0 12.06a8.216 8.216 0 0 1 1.4-4.71c1.1-1.61 2.76-2.61 4.58-2.61a3.52 3.52 0 0 1 3.03 1.63c1 .58 1.43 1 1.94 1 .5 0 .97-.43 2.03-1.03a4.722 4.722 0 0 1 4.7.13c1.6.93 2.73 2.41 3.32 4.19-.11.05-1.92.83-1.92 3.42s1.58 3.1 3.07 3.57c-.28 1-.77 2-1.15 2.64M12.03 3.3c.72-.88 1.2-2.06 1.2-3.3 0-.11 0-.19-.01-.27a3.441 3.441 0 0 0-2.3 1.15c-.68.79-1.21 1.93-1.21 3.2 0 .12 0 .22.01.32.1.01.19.01.27.01 1.26 0 2.21-.69 2.04-3.11"
            />
          </svg>
          <span className="text-sm font-semibold text-white">Apple</span>
        </button>
      </div>

      {/* Separator */}
      <div className="w-full flex items-center gap-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-[10px] font-bold text-glacier-on-surface-variant tracking-[0.2em] uppercase">
          HOẶC
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Form */}
      <form className="w-full space-y-6">
        <div className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-glacier-on-surface-variant ml-1">
              ĐỊA CHỈ EMAIL
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-glacier-on-surface-variant group-focus-within:text-glacier-primary transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="ten@email.com"
                className="w-full bg-[#050A11]/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-glacier-primary/50 focus:ring-1 focus:ring-glacier-primary/20 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-glacier-on-surface-variant">
                MẬT KHẨU
              </label>
              <Link
                href="#"
                className="text-[11px] font-bold text-glacier-primary hover:text-white transition-colors uppercase tracking-wide"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-glacier-on-surface-variant group-focus-within:text-glacier-primary transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                type="password"
                className="w-full bg-[#050A11]/60 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white focus:outline-none focus:border-glacier-primary/50 focus:ring-1 focus:ring-glacier-primary/20 transition-all"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-glacier-on-surface-variant hover:text-glacier-primary transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-3 px-1">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="peer appearance-none w-5 h-5 border-2 border-glacier-primary/30 rounded-md checked:bg-glacier-primary checked:border-glacier-primary transition-all cursor-pointer"
            />
            <svg
              className="absolute w-3.5 h-3.5 text-glacier-bg pointer-events-none hidden peer-checked:block left-[3px] top-[3px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <label
            htmlFor="remember"
            className="text-sm font-medium text-glacier-on-surface-variant cursor-pointer select-none"
          >
            Ghi nhớ đăng nhập
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-glacier-primary shadow-[0_0_20px_rgba(125,211,252,0.3)] rounded-xl text-glacier-bg font-bold text-lg tracking-wide hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          Đăng Nhập
        </button>
      </form>

      {/* Footer Links */}
      <footer className="w-full flex flex-col items-center gap-6 mt-2">
        <p className="text-[15px] text-glacier-on-surface/80">
          Chưa có tài khoản?{" "}
          <Link
            href="#"
            className="font-bold text-glacier-primary hover:underline underline-offset-4"
          >
            Tạo tài khoản mới
          </Link>
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-60">
          {["Về chúng tôi", "Bền vững", "Điều khoản", "Bảo mật", "Hỗ trợ"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-glacier-on-surface hover:text-glacier-primary transition-colors"
              >
                {item}
              </Link>
            ),
          )}
        </div>
      </footer>
    </div>
  );
}
