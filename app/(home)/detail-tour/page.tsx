"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourDetailPage() {
  const [selectedImage, setSelectedImage] = React.useState("/glacier_hero.png");

  return (
    <div className="min-h-screen text-white font-inter pb-24">
      {/* 1. Hero Gallery Section */}
      <section className="px-6 md:px-24 py-12 space-y-6">
        <div className="flex items-center gap-2 text-sm text-glacier-on-surface-variant mb-6">
          <Link href="/" className="hover:text-glacier-primary transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="#" className="hover:text-glacier-primary transition-colors">Điểm đến</Link>
          <span>/</span>
          <span className="text-white font-bold">Thám hiểm Vatnajökull</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
          {/* Main Large Image */}
          <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden glacier-glass group">
            <Image
              src={selectedImage}
              alt="Main Gallery"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              priority
            />
            <div className="absolute top-6 left-6 flex gap-3">
               <span className="px-3 py-1 bg-glacier-primary text-glacier-bg text-[10px] font-black rounded-lg uppercase tracking-widest">Đặc Sắc</span>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
             {["/gallery_1.png", "/gallery_2.png", "/gallery_3.png", "/gallery_4.png"].map((img, i) => (
               <div 
                 key={i} 
                 className={`relative h-full rounded-2xl overflow-hidden cursor-pointer glacier-glass border-2 transition-all ${selectedImage === img ? 'border-glacier-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                 onClick={() => setSelectedImage(img)}
               >
                 <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. Main Content Split Layout */}
      <section className="px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Details (70%) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header Info */}
          <div className="space-y-6">
             <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none glacier-text-glow">
                  Thám hiểm Hang Động <br /> <span className="text-glacier-primary">Băng Vatnajökull</span>
                </h1>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 glacier-glass rounded-full text-xs font-bold text-glacier-on-surface">
                     <LocationIcon size={14} className="text-glacier-primary" />
                     Vatnajökull, Iceland
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 glacier-glass rounded-full text-xs font-bold text-glacier-on-surface">
                     <ClockIcon size={14} className="text-glacier-primary" />
                     4-6 Giờ
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 glacier-glass rounded-full text-xs font-bold text-glacier-on-surface">
                     <GroupIcon size={14} className="text-glacier-primary" />
                     Tối đa 8 người
                  </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <QuickInfoItem title="Trang bị" icon={<SuitIcon />} value="Cung cấp sẵn" />
                <QuickInfoItem title="Nhiệt độ" icon={<TempIcon />} value="-12°C đến 0°C" />
                <QuickInfoItem title="Độ khó" icon={<FlagIcon />} value="Trung bình" />
             </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-glacier-on-surface-variant">
             <h2 className="text-2xl font-black text-white uppercase tracking-tight">Về hành trình này</h2>
             <p className="text-lg leading-relaxed">
                Hành trình đưa bạn vào trái tim của Vatnajökull, sông băng lớn nhất Châu Âu. Đây không chỉ là một chuyến đi, mà là một cuộc thám hiểm sâu vào những hang động tinh thể băng xanh thẳm, nơi ánh sáng xuyên qua lớp băng nghìn năm tạo nên những khung cảnh huyền ảo không thể tin được.
             </p>
             <p className="text-lg leading-relaxed">
                Bạn sẽ được trang bị đầy đủ các dụng cụ chuyên dụng, từ đinh sắt bám băng (crampons) đến rìu phá băng, dưới sự hướng dẫn của các chuyên gia thám hiểm giàu kinh nghiệm nhất.
             </p>
          </div>

          {/* Itinerary Timeline */}
          <div className="space-y-8">
             <h2 className="text-2xl font-black text-white uppercase tracking-tight text-glacier-primary">Lịch trình chi tiết</h2>
             <div className="space-y-0 relative ml-6 border-l-2 border-glacier-primary/20">
                <TimelineStep 
                  time="08:00 AM" 
                  title="Tập trung & Trang bị" 
                  desc="Gặp mặt tại điểm hẹn, nhận trang bị bảo hộ và nghe phổ biến các quy tắc an toàn quan trọng." 
                />
                <TimelineStep 
                  time="09:30 AM" 
                  title="Di chuyển đến Sông Băng" 
                  desc="Di chuyển bằng xe chuyên dụng vượt địa hình tuyết để đến chân sông bằng Vatnajökull." 
                />
                <TimelineStep 
                  time="11:00 AM" 
                  title="Chinh phục Hang Băng" 
                  desc="Bắt đầu thám hiểm các hang động băng sâu thẳm. Thời gian tự do để chụp ảnh và cảm nhận vẻ đẹp tự nhiên." 
                  active
                />
                <TimelineStep 
                  time="02:00 PM" 
                  title="Trở về & Kết thúc" 
                  desc="Quay trở lại điểm tập trung. Thưởng thức đồ uống nóng và chia sẻ những khoảnh khắc tuyệt vời." 
                />
             </div>
          </div>

          {/* Guide Info */}
          <div className="glacier-glass rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-8 border-white/5">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-glacier-primary/30 glacier-glow shrink-0">
               <img src="https://ui-avatars.com/api/?name=Marcus+Sims&background=0e4d6e&color=7dd3fc" alt="Guide" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-glacier-primary uppercase">Hướng dẫn viên trưởng</span>
              <h3 className="text-2xl font-black text-white uppercase">Marcus Sims</h3>
              <p className="text-glacier-on-surface-variant leading-relaxed">Với hơn 12 năm kinh nghiệm dẫn dắt các đoàn thám hiểm Bắc Cực, Marcus là chuyên gia hàng đầu về địa chất sông băng và an toàn thám hiểm.</p>
            </div>
            <button className="px-8 py-3 glacier-glass border border-white/10 rounded-xl font-bold hover:text-glacier-primary transition-colors">
              Nhắn tin
            </button>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card (30%) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 glacier-glass rounded-[40px] p-10 space-y-8 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="space-y-1">
              <span className="text-glacier-on-surface-variant text-sm font-bold uppercase tracking-wider">Giá khởi điểm</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-glacier-primary">6.850.000</span>
                <span className="text-lg font-bold text-glacier-on-surface-variant uppercase">VNĐ</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-glacier-on-surface-variant ml-1">Chọn Ngày</label>
                <button className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 flex items-center justify-between text-white hover:border-glacier-primary/40 transition-all">
                  <span className="font-bold">25 Tháng 04, 2026</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-glacier-on-surface-variant ml-1">Số lượng khách</label>
                <div className="w-full bg-white/5 border border-white/10 rounded-xl px-2 py-2 flex items-center justify-between">
                  <button className="w-10 h-10 glacier-glass rounded-lg flex items-center justify-center font-bold text-lg hover:text-glacier-primary">-</button>
                  <span className="text-lg font-bold">02 Người</span>
                  <button className="w-10 h-10 glacier-glass rounded-lg flex items-center justify-center font-bold text-lg hover:text-glacier-primary">+</button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
               <div className="flex justify-between items-center text-glacier-on-surface-variant">
                  <span className="text-sm font-medium">Giá 2 người</span>
                  <span className="font-bold text-white tracking-wide uppercase">13.700.000 VNĐ</span>
               </div>
               <div className="flex justify-between items-center text-glacier-on-surface-variant">
                  <span className="text-sm font-medium">Phí dịch vụ</span>
                  <span className="font-bold text-white tracking-wide uppercase">250.000 VNĐ</span>
               </div>
            </div>

            <button className="w-full py-5 bg-glacier-primary text-glacier-bg rounded-2xl font-black text-xl tracking-wide uppercase glacier-glow hover:scale-[1.02] active:scale-95 transition-all">
              Đặt Chuyến Đi Ngay
            </button>

            <p className="text-[10px] text-center text-glacier-on-surface-variant font-bold uppercase tracking-widest leading-relaxed">
              Cam kết giá tốt nhất & Hủy chuyến linh hoạt hoàn tiền cực nhanh trong 24h
            </p>
          </div>
        </div>
      </section>

      {/* 3. Reviews Section */}
      <section className="mt-24 px-6 md:px-24 max-w-7xl">
         <div className="space-y-8">
            <div className="flex items-center gap-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Đánh giá thực tế</h2>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-glacier-primary text-glacier-bg rounded-lg font-black text-lg">
                   <StarIcon size={18} />
                   4.9 / 5
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ReviewItem 
                 name="Thùy Dương" 
                 date="15/03/2026" 
                 text="Không thể tả được vẻ đẹp của hang băng bằng lời. Một màu xanh cực kỳ huyền bí. Gia đình tôi đã có những kỷ niệm không bao giờ quên." 
               />
               <ReviewItem 
                 name="Quốc Trung" 
                 date="02/02/2026" 
                 text="Lịch trình rất hợp lý, không quá mệt mỏi. Trang bị rất xịn và chuyên nghiệp. Tôi sẽ quay lại Iceland vào mùa sau cùng PKA Travel." 
               />
            </div>
         </div>
      </section>
    </div>
  );
}

function QuickInfoItem({ title, icon, value }: { title: string; icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl glacier-glass flex items-center justify-center text-glacier-primary transition-transform group-hover:rotate-12">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-glacier-on-surface-variant uppercase tracking-widest leading-none mb-1">{title}</p>
        <p className="text-sm font-bold text-white uppercase">{value}</p>
      </div>
    </div>
  )
}

function TimelineStep({ time, title, desc, active = false }: { time: string; title: string; desc: string; active?: boolean }) {
  return (
    <div className="relative pl-12 pb-12 group last:pb-0">
      <div className={`absolute left-[-11px] top-0 w-[20px] h-[20px] rounded-full glacier-glass border-2 transition-all duration-500 z-10 ${active ? 'bg-glacier-primary border-glacier-primary glacier-glow scale-125' : 'bg-glacier-bg border-white/20 group-hover:border-glacier-primary/50'}`} />
      <div className="space-y-2">
         <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${active ? 'bg-glacier-primary/20 text-glacier-primary' : 'text-glacier-on-surface-variant opacity-60'}`}>{time}</span>
         <h4 className="text-xl font-black text-white uppercase tracking-tight">{title}</h4>
         <p className="text-glacier-on-surface-variant leading-relaxed max-w-2xl">{desc}</p>
      </div>
    </div>
  )
}

function ReviewItem({ name, date, text }: { name: string; date: string; text: string }) {
  return (
    <div className="glacier-glass rounded-[24px] p-8 border-white/5 space-y-4">
      <div className="flex justify-between items-start">
         <div className="space-y-1">
            <p className="font-black text-white uppercase tracking-tight">{name}</p>
            <p className="text-[10px] text-glacier-on-surface-variant font-bold">{date}</p>
         </div>
         <div className="flex text-glacier-primary">
            {[...Array(5)].map((_, i) => <StarIcon key={i} size={12} />)}
         </div>
      </div>
      <p className="text-glacier-on-surface-variant leading-relaxed">"{text}"</p>
    </div>
  )
}

// Icons
function LocationIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}

function ClockIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

function GroupIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="7" r="4"/></svg>;
}

function StarIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}

function SuitIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
}

function TempIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>;
}

function FlagIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
}

