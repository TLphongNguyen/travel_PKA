"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HistoriesTourPage() {
  return (
    <div className="min-h-screen text-white font-inter flex flex-col md:flex-row p-6 md:p-12 gap-12">
      {/* Sidebar - Dashboard Navigation */}
      <aside className="hidden lg:flex flex-col w-80 space-y-8 shrink-0">
        {/* Profile/Membership Card */}
        <div className="glacier-glass rounded-[24px] p-8 border-white/10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-glacier-primary/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-glacier-primary/20 transition-all" />
           <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-glacier-primary/20 flex items-center justify-center text-glacier-primary">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 </div>
                 <span className="text-[10px] font-black tracking-[0.2em] text-glacier-on-surface-variant uppercase">Thành viên Bạc</span>
              </div>
              <div className="space-y-1">
                 <p className="text-4xl font-black text-white">12,450</p>
                 <p className="text-xs font-bold text-glacier-on-surface-variant">Dặm bay tích lũy</p>
              </div>
              <div className="space-y-3">
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gradient-to-r from-glacier-primary/50 to-glacier-primary glacier-glow" />
                 </div>
                 <p className="text-[9px] font-bold text-glacier-on-surface-variant uppercase tracking-widest text-center">Còn 2,550 dặm để lên hạng Vàng</p>
              </div>
           </div>
        </div>

        <div className="space-y-2">
           <h2 className="text-xs font-black text-glacier-on-surface-variant uppercase tracking-[0.3em] ml-2">Danh mục quản lý</h2>
           <div className="space-y-2 pt-4">
              <SidebarLink icon={<TicketIcon />} label="Vé của tôi" active />
              <SidebarLink icon={<HeartIcon />} label="Yêu thích" />
              <SidebarLink icon={<WalletIcon />} label="Thanh toán" />
              <SidebarLink icon={<SettingsIcon />} label="Cài đặt" />
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 space-y-12">
        {/* Header section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight glacier-text-glow">Lịch Sử Chuyển Đi</h1>
              <p className="text-glacier-on-surface-variant max-w-xl font-medium">Chào mừng trở lại, Duy. Khám phá những hành trình sắp tới và những kỷ niệm bạn đã lưu giữ.</p>
           </div>
           {/* Tab Switcher */}
           <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5 h-fit">
              <button className="px-6 py-2.5 bg-glacier-glass border border-white/10 rounded-xl text-xs font-black uppercase text-glacier-primary glacier-glow">Sắp tới</button>
              <button className="px-6 py-2.5 text-xs font-black uppercase text-glacier-on-surface-variant hover:text-white transition-colors">Đã đi</button>
           </div>
        </header>

        {/* Section 1: Upcoming Trips */}
        <div className="space-y-8">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-glacier-primary" />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Chuyến đi sắp tới</h2>
           </div>

           <div className="space-y-6">
              {/* Card 1: Zermatt */}
              <div className="glacier-glass rounded-[32px] overflow-hidden border-white/5 flex flex-col lg:flex-row h-full group hover:border-glacier-primary/20 transition-all duration-500">
                 <div className="lg:w-1/3 relative h-[250px] lg:h-auto overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop" alt="Zermatt" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-glacier-primary text-glacier-bg text-[10px] font-black rounded-lg uppercase">Hành trình bằng giá</span>
                    </div>
                 </div>
                 <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between space-y-8">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                       <div className="space-y-1">
                          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Khám phá Zermatt</h3>
                          <div className="flex items-center gap-2 text-glacier-on-surface-variant font-bold">
                             <LocationIcon size={14} />
                             <span className="text-sm">Thụy Sĩ</span>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase tracking-widest leading-none mb-1">Mã đặt chỗ</p>
                          <p className="text-lg font-bold text-glacier-primary">GLC-99201</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                       <div>
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase mb-1">Ngày khởi hành</p>
                          <p className="text-sm font-bold text-white">12 Tháng 12, 2024</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase mb-1">Thời gian</p>
                          <p className="text-sm font-bold text-white">08:30 AM</p>
                       </div>
                       <div className="hidden md:block">
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase mb-1">Cổng</p>
                          <p className="text-sm font-bold text-white">Terminal A3</p>
                       </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                       <Link href="/detail-tour" className="text-xs font-black text-glacier-primary uppercase tracking-widest hover:underline">Chi tiết hành trình</Link>
                       <div className="w-12 h-12 glacier-glass rounded-xl flex items-center justify-center p-1.5">
                          <QRcodeIcon />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Card 2: Tromsø */}
              <div className="glacier-glass rounded-[32px] overflow-hidden border-white/5 flex flex-col lg:flex-row h-full group hover:border-glacier-primary/20 transition-all duration-500">
                 <div className="lg:w-1/3 relative h-[200px] lg:h-auto overflow-hidden opacity-80">
                    <Image src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&auto=format&fit=crop" alt="Tromsø" fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 glacier-glass text-white text-[10px] font-black rounded-lg uppercase backdrop-blur-xl">Cắm trại cao cấp</span>
                    </div>
                 </div>
                 <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="space-y-1">
                          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Đêm Trắng Tromsø</h3>
                          <div className="flex items-center gap-2 text-glacier-on-surface-variant font-bold">
                             <LocationIcon size={14} />
                             <span className="text-sm">Na Uy</span>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase tracking-widest leading-none mb-1">Mã đặt chỗ</p>
                          <p className="text-lg font-bold text-glacier-primary">GLC-10443</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                       <div>
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase mb-1">Ngày khởi hành</p>
                          <p className="text-sm font-bold text-white">20 Tháng 01, 2025</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-glacier-on-surface-variant uppercase mb-1">Trạng thái</p>
                          <p className="text-sm font-bold text-glacier-primary">Đã xác nhận thanh toán</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Section 2: Past Memories */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight font-inter">Những kỷ niệm đáng nhớ</h2>
              <span className="text-[10px] font-black text-glacier-on-surface-variant uppercase tracking-widest cursor-pointer hover:text-white">Xem tất cả</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
              <PastTripCard 
                title="Hồ Banff, Canada"
                date="Tháng 8, 2024 • 7 Ngày 6 Đêm"
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
                buttonText="Xem Album Ảnh"
              />
              <PastTripCard 
                title="Vik, Iceland"
                date="Tháng 11, 2023 • 5 Ngày 4 Đêm"
                image="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&auto=format&fit=crop"
                buttonText="Xem Lịch Trình"
              />
           </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href="#" 
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${active ? 'glacier-glass border border-white/10 text-white glacier-glow' : 'text-glacier-on-surface-variant hover:text-white hover:bg-white/5'}`}
    >
      <div className={`${active ? 'text-glacier-primary' : ''}`}>{icon}</div>
      <span className="text-sm font-bold tracking-wide">{label}</span>
    </Link>
  )
}

function PastTripCard({ title, date, image, buttonText }: { title: string; date: string; image: string; buttonText: string }) {
  return (
    <div className="group glacier-glass rounded-[32px] overflow-hidden border-white/5 flex flex-col h-full hover:border-glacier-primary/20 transition-all duration-500">
       <div className="relative h-[240px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute top-4 right-4 w-8 h-8 glacier-glass rounded-full flex items-center justify-center text-glacier-primary backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
       </div>
       <div className="flex-1 p-8 space-y-6">
          <div className="space-y-1">
             <h4 className="text-xl font-black text-white uppercase tracking-tight">{title}</h4>
             <p className="text-[10px] font-bold text-glacier-on-surface-variant uppercase tracking-widest">{date}</p>
          </div>
          <button className="w-full py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-glacier-primary hover:text-glacier-bg transition-all">
             {buttonText}
          </button>
       </div>
    </div>
  )
}

// Icons
function TicketIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="7" y1="15" x2="7" y2="15.01"/><line x1="12" y1="15" x2="12" y2="15.01"/><line x1="17" y1="15" x2="17" y2="15.01"/></svg>;
}

function HeartIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
}

function WalletIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M22 10h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6"/><circle cx="18" cy="12" r="1"/></svg>;
}

function SettingsIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
}

function LocationIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}

function QRcodeIcon() {
  return <svg width="full" height="full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="1"/><rect width="8" height="8" x="13" y="3" rx="1"/><rect width="8" height="8" x="3" y="13" rx="1"/><path d="M13 13h2"/><path d="M13 17h10"/><path d="M13 21h2"/><path d="M21 13h2"/><path d="M21 17h.01"/><path d="M17 13h2"/><path d="M17 17h2"/><path d="M17 21h6"/><path d="M21 21h.01"/><path d="M9 7h.01"/><path d="M9 17h.01"/><path d="M19 7h.01"/></svg>;
}

