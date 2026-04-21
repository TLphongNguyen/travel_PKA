import React from "react";
import Link from "next/link";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-glacier-bg text-white font-inter flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full z-[100] glacier-glass border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg glacier-glass flex items-center justify-center glacier-glow group-hover:scale-105 transition-transform">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="m20 7-8 5 8 5"></path>
                <path d="m4 17 8-5-8-5"></path>
                <path d="m19 3-7 9 7 9"></path>
                <path d="m5 21 7-9-5-9"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase">
              PKA Travel
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-semibold text-glacier-on-surface-variant hover:text-glacier-primary transition-all tracking-wide">Điểm Đến</Link>
            <Link href="#" className="text-sm font-semibold text-glacier-on-surface-variant hover:text-glacier-primary transition-all tracking-wide">Chuyến Đi</Link>
            <Link href="#" className="text-sm font-semibold text-glacier-on-surface-variant hover:text-glacier-primary transition-all tracking-wide">Trang Bị</Link>
            <Link href="/histories-tour" className="text-sm font-semibold text-glacier-on-surface-variant hover:text-glacier-primary transition-all tracking-wide">Lịch sử</Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-glacier-on-surface-variant hover:text-glacier-primary transition-colors">
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link
            href="/login"
            className="text-sm font-bold text-glacier-on-surface-variant hover:text-white transition-colors"
          >
            Đăng Nhập
          </Link>
          <button className="hidden md:block px-6 py-2.5 bg-glacier-primary text-glacier-bg font-bold text-sm rounded-lg glacier-glow hover:brightness-110 active:scale-95 transition-all">
            Đặt Ngay
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden w-10 h-10 glacier-glass rounded-lg flex items-center justify-center">
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
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="flex-1 w-full">{children}</main>

      {/* Premium Footer */}
      <footer className="w-full bg-[#050A11] border-t border-white/5 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-glacier-primary uppercase tracking-tight">
              PKA Travel
            </h2>
            <p className="text-sm text-glacier-on-surface-variant leading-relaxed opacity-80">
              Đưa bạn đến những vùng đất kỳ vĩ nhất hành tinh bằng những trải
              nghiệm đẳng cấp và bền vững.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Công Ty
            </h3>
            <ul className="space-y-3">
              {["Về chúng tôi", "Tuyển dụng", "Blog", "Bền vững"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-glacier-on-surface-variant hover:text-glacier-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Hỗ Trợ
            </h3>
            <ul className="space-y-3">
              {["Trung tâm trợ giúp", "Hủy chuyến", "Liên hệ"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-glacier-on-surface-variant hover:text-glacier-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Đăng ký nhận tin
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-glacier-primary/50 transition-all"
              />
              <button className="px-4 py-2 bg-glacier-primary text-glacier-bg font-bold text-sm rounded-lg hover:brightness-110">
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-widest text-glacier-on-surface-variant">
            © 2026 PKA TRAVEL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-glacier-on-surface-variant hover:text-white transition-colors"
            >
              Điều khoản
            </Link>
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-glacier-on-surface-variant hover:text-white transition-colors"
            >
              Bảo mật
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        active
          ? "bg-glacier-primary/10 text-glacier-primary glacier-glow border border-glacier-primary/20"
          : "text-glacier-on-surface-variant hover:bg-white/5 hover:text-white"
      }`}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </Link>
  );
}

function MobileNavItem({
  href,
  icon,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex-1 flex flex-col items-center justify-center py-2 group"
    >
      <div
        className={`transition-all duration-300 ${
          active
            ? "text-glacier-primary bg-glacier-primary/10 p-2 rounded-xl"
            : "text-glacier-on-surface-variant group-hover:text-white"
        }`}
      >
        {icon}
      </div>
    </Link>
  );
}

// Icons
function ExploreIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </svg>
  );
}

function ToursIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
