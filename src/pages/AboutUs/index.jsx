import React from "react";

const index = () => {
  return (
    <>
      <main className="py-5 px-3">
        <div className="containers grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <div className="about-us-content w-3/4">
              <h1 className="text-2xl font-semibold text-slate-500">
                Tentang Kami
              </h1>
              <p className="text-slate-400 text-lg">
                Kala Kreatif adalah sebuah jasa pembuatan website profesional di
                bidang pengembangan situs e-commerce, website, sistem berbasis
                web serta aplikasi Mobile, Kalakreatif adalah partner terbaik
                untuk bisnis Anda dalam menghadapi Era Digital yang serba
                teknologi.
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253018.7256117877!2d110.06708108671877!3d-7.74545389999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5965147ccd1f%3A0xc8919f59518ac174!2sKala%20Kreatif!5e0!3m2!1sid!2sid!4v1673760630717!5m2!1sid!2sid"
              className="w-3/4 h-[300px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
