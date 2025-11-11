import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-block">
        <h2 className="gallery-title">Yesería</h2>
        <div className="gallery-swiper">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <a href="/cielorrasos" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/yesoImg/armado-trapecio.jpg"
                    alt="Cielorrasos armados con yeso y detalles decorativos"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Cielorrasos</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/paredes" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/yesoImg/monoambiente2.jpg"
                    alt="Aplicación de paredes con yeso en monoambiente"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Paredes</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/molduras" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/yesoImg/moldura1.jpg"
                    alt="Buñas y molduras decorativas en yeso"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Molduras</div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="gallery-block">
        <h2 className="gallery-title">Albañilería</h2>
        <div className="gallery-swiper">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <a href="/mamposteria" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/albaImg/mamposteria1.jpg"
                    alt="Trabajo de mampostería con ladrillos y construcción de muros"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Mampostería</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/microcemento" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/albaImg/microcemento1.jpg"
                    alt="Aplicación de microcemento en pisos y paredes"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Microcemento</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/revestimientos" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/albaImg/revestimientos1.jpg"
                    alt="Revestimientos y pisos decorativos para interiores"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Revestimientos y Pisos</div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="gallery-block">
        <h2 className="gallery-title">Pintura</h2>
        <div className="gallery-swiper">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <a href="/pintura-interior" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/pinturaImg/interior1.jpg"
                    alt="Pintura interior de habitaciones con colores decorativos"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Pintura Interior</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/pintura-exterior" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/pinturaImg/exterior1.jpg"
                    alt="Pintura exterior de fachadas y muros"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">Pintura Exterior</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/pintura-refacciones" className="gallery-card">
                <div className="gallery-image">
                  <img
                    src="/pinturaImg/refaccion1.jpg"
                    alt="Refacciones y restauraciones con pintura profesional"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                </div>
                <div className="gallery-caption">
                  Refacciones / Restauraciones
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
