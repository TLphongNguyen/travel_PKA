import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập | Glacier Travel",
  description: "Bắt đầu hành trình khám phá vùng đất băng giá của bạn.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center p-4 overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url('/glacier_login_background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) saturate(1.2)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

