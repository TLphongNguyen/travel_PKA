"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center px-6 md:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/glacier_hero.png"
            alt="Glacier Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-glacier-bg via-glacier-bg/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-glacier-primary/20 border border-glacier-primary/30 rounded-full backdrop-blur-md">
            <span className="text-[10px] font-black tracking-[0.2em] text-glacier-primary uppercase">
              CHUYẾN ĐI ĐẲNG CẤP
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] glacier-text-glow">
              Khám Phá <br />{" "}
              <span className="text-glacier-primary">Kỷ Băng Hà</span>
            </h1>
            <p className="text-lg md:text-xl text-glacier-on-surface-variant max-w-xl leading-relaxed">
              Hành trình chinh phục những đỉnh băng vĩnh cửu và hang động kỳ vĩ
              nhất hành tinh. Trải nghiệm sự tĩnh lặng của phương Bắc.
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 py-4">
            <HeroMetaItem
              icon={<LocationIcon />}
              label="Iceland"
              sublabel="Vị trí"
            />
            <HeroMetaItem
              icon={<TimeIcon />}
              label="7 Ngày 6 Đêm"
              sublabel="Thời gian"
            />
            <HeroMetaItem
              icon={<GroupIcon />}
              label="Tối đa 8"
              sublabel="Nhóm nhỏ"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-10 py-4 bg-glacier-primary text-glacier-bg font-black text-lg rounded-xl glacier-glow hover:scale-105 transition-transform active:scale-95">
              Khám Phá Ngay
            </button>
            <button className="px-10 py-4 glacier-glass border border-white/20 text-white font-black text-lg rounded-xl hover:bg-white/5 transition-colors">
              Xem Video
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* 2. Activity Categories */}
      <section className="py-24 px-6 md:px-24 bg-glacier-bg">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-[11px] font-bold text-glacier-primary uppercase tracking-[0.4em]">
              Phong cách trải nghiệm
            </h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase">
              Lựa chọn của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Leo Núi Băng"
              image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop"
            />
            <CategoryCard
              title="Trượt Tuyết"
              image="https://images.unsplash.com/photo-1551698618-1fed5d978044?w=800&auto=format&fit=crop"
            />
            <CategoryCard
              title="Nhiếp Ảnh Cực Quang"
              image="https://images.unsplash.com/photo-1531366930499-41f66950574f?w=800&auto=format&fit=crop"
            />
            <CategoryCard
              title="Du Thuyền Băng"
              image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* 3. Trending Destinations */}
      <section className="py-24 px-6 md:px-24 bg-[#080C14]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-[11px] font-bold text-glacier-primary uppercase tracking-[0.4em]">
                Khám phá thế giới mới
              </h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase leading-none">
                Điểm đến xu hướng
              </p>
            </div>
            <button className="text-xs font-bold text-glacier-primary uppercase tracking-widest hover:underline px-2">
              Xem tất cả địa điểm
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Card */}
            <div className="lg:col-span-8 relative h-[600px] rounded-[32px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&auto=format&fit=crop"
                alt="Lapland"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-glacier-bg via-glacier-bg/20 to-transparent" />
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-3 py-1 bg-glacier-primary text-glacier-bg text-[10px] font-black rounded-lg">
                  BÁN CHẠY NHẤT
                </span>
                <span className="px-3 py-1 glacier-glass text-white text-[10px] font-black rounded-lg uppercase tracking-wider backdrop-blur-xl">
                  7 Ngày
                </span>
              </div>
              <div className="absolute bottom-12 left-12 right-12 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                    Săn Ảnh Cực Quang
                  </h3>
                  <p className="text-lg text-glacier-on-surface-variant max-w-xl">
                    Hành trình huyền diệu xuyên qua vùng Lapland lạnh giá để tìm
                    kiếm những dải sáng kỳ ảo nhất vũ trụ.
                  </p>
                </div>
                <Link
                  href="/detail-tour"
                  className="inline-block px-8 py-4 glacier-glass border border-white/20 text-white font-bold rounded-xl hover:bg-glacier-primary hover:text-glacier-bg transition-all"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>

            {/* Side Grid */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <TrendingSmallCard
                title="Hang Động Băng Xanh"
                location="Vatnajökull, Iceland"
                image="https://images.unsplash.com/photo-1489493512598-d08130f49bea?w=600&auto=format&fit=crop"
              />
              <TrendingSmallCard
                title="Chèo Kayak Fjord"
                location="Loften, Norway"
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop"
              />
              <TrendingSmallCard
                title="Động Vật Hoang Dã"
                location="Svalbard, Norway"
                image="https://images.unsplash.com/photo-1483232374697-a879011634bb?w=600&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-24 px-6 md:px-24 bg-glacier-bg">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <h2 className="text-[11px] font-bold text-glacier-primary uppercase tracking-[0.4em]">
              Chia sẻ của khách hàng
            </h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase">
              Trải nghiệm thực tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Minh Hoàng"
              role="Nhiếp ảnh gia"
              text="Một trải nghiệm thực sự thay đổi cuộc đời. Sự tĩnh lặng giữa lòng hang động băng là thứ tôi chưa từng cảm nhận được ở đâu khác."
              avatar="https://ui-avatars.com/api/?name=MH&background=0e4d6e&color=7dd3fc"
            />
            <TestimonialCard
              name="Lan Anh"
              role="Kỹ sư"
              text="Dịch vụ đẳng cấp và đội ngũ hướng dẫn vô cùng chuyên nghiệp. Tôi cảm thấy hoàn toàn an toàn dù đang leo trên những vách băng thẳng đứng."
              avatar="https://ui-avatars.com/api/?name=LA&background=0e4d6e&color=7dd3fc"
            />
            <TestimonialCard
              name="Robert Chen"
              role="Nhà thám hiểm"
              text="PKA Travel đã mang đến một góc nhìn hoàn toàn mới về du lịch bền vững. Mọi chi tiết đều được chăm chút để giảm thiểu tác động môi trường."
              avatar="https://ui-avatars.com/api/?name=RC&background=0e4d6e&color=7dd3fc"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroMetaItem({
  icon,
  label,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl glacier-glass border border-white/5 flex items-center justify-center text-glacier-primary transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-glacier-on-surface-variant">
          {sublabel}
        </p>
        <p className="text-sm font-bold text-white uppercase">{label}</p>
      </div>
    </div>
  );
}

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-glacier-bg via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-8 left-8 right-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-glacier-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}

function TrendingSmallCard({
  title,
  location,
  image,
}: {
  title: string;
  location: string;
  image: string;
}) {
  return (
    <Link
      href="/detail-tour"
      className="relative h-[180px] rounded-2xl overflow-hidden group flex flex-col justify-end p-6"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-glacier-bg/90 to-transparent" />
      <div className="relative space-y-1">
        <h4 className="text-xl font-black text-white uppercase tracking-tight">
          {title}
        </h4>
        <div className="flex items-center gap-1 text-glacier-on-surface-variant">
          <LocationIcon size={12} />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            {location}
          </span>
        </div>
      </div>
    </Link>
  );
}

function TestimonialCard({
  name,
  role,
  text,
  avatar,
}: {
  name: string;
  role: string;
  text: string;
  avatar: string;
}) {
  return (
    <div className="glacier-glass rounded-[32px] p-10 flex flex-col gap-8 border-white/5 hover:border-glacier-primary/20 transition-all duration-500">
      <div className="flex gap-1 text-glacier-primary">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-lg text-glacier-on-surface leading-relaxed font-medium italic">
        "{text}"
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-glacier-primary/20">
          <img src={avatar} alt={name} />
        </div>
        <div>
          <p className="font-black text-white uppercase tracking-tight">
            {name}
          </p>
          <p className="text-xs text-glacier-on-surface-variant font-bold uppercase tracking-widest">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

// Icons
function LocationIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

function TimeIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GroupIcon() {
  return (
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="19" cy="7" r="4" />
    </svg>
  );
}
