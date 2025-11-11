import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  return (
    <section className="py-12 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      {/* Yesería */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">Yesería</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          <SwiperSlide>
            <a href="/cielorrasos" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/yesoImg/armado-trapecio.jpg"
                  alt="Cielorrasos armados con yeso y detalles decorativos"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Cielorrasos
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/paredes" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/yesoImg/monoambiente2.jpg"
                  alt="Aplicación de paredes con yeso en monoambiente"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Paredes
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/molduras" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/yesoImg/moldura1.jpg"
                  alt="Buñas y molduras decorativas en yeso"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Molduras
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Albañilería */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">Albañilería</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          <SwiperSlide>
            <a href="/mamposteria" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/albaImg/mamposteria1.jpg"
                  alt="Trabajo de mampostería con ladrillos y construcción de muros"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Mampostería
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/microcemento" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/albaImg/microcemento1.jpg"
                  alt="Aplicación de microcemento en pisos y paredes"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Microcemento
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/revestimientos" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/albaImg/revestimientos1.jpg"
                  alt="Revestimientos y pisos decorativos para interiores"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Revestimientos y Pisos
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Pintura */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">Pintura</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          <SwiperSlide>
            <a href="/pintura-interior" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/pinturaImg/interior1.jpg"
                  alt="Pintura interior de habitaciones con colores decorativos"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Pintura Interior
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/pintura-exterior" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/pinturaImg/exterior1.jpg"
                  alt="Pintura exterior de fachadas y muros"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Pintura Exterior
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/pintura-refacciones" className="block rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <img
                  src="/pinturaImg/refaccion1.jpg"
                  alt="Refacciones y restauraciones con pintura profesional"
                  className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
              <div className="bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Refacciones / Restauraciones
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}