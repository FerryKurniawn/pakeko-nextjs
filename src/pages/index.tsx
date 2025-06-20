import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

const Home = () => {
  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Toko Ikan Segar | EKO Sambas</title>
        <meta
          name="description"
          content="Toko ikan segar Sambas. Pesan ikan air tawar berkualitas, segar langsung dari kolam terbaik."
        />
        <meta property="og:title" content="Toko Ikan Segar | EKO Sambas" />
        <meta
          property="og:description"
          content="Pesan ikan segar langsung dari Sambas, Kalimantan Barat."
        />
        <meta property="og:image" content="/pakeko.png" />
      </Head>

      <div className="sticky z-50 top-0 bg-white shadow-md py-2 text-xl px-10 md:px-16">
        <Navbar />
      </div>
      <div className="mx-10 md:mx-16">
        <section
          id="home"
          className="relative flex items-center justify-center min-h-screen py-12 text-center"
        >
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6">
              Sajikan Hidangan Terbaik <br /> dengan Ikan Berkualitas!
            </h1>
            <p className="mb-6 text-lg leading-relaxed">
              Kami menyediakan berbagai jenis ikan air tawar segar langsung dari
              kolam budidaya terbaik. Tanpa bahan pengawet, tanpa perantara —
              hanya ikan pilihan dengan kualitas terjamin untuk kebutuhan dapur
              Anda.
            </p>
            <a
              href="#products"
              className="inline-block bg-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 font-bold text-white transition"
            >
              Belanja Sekarang
            </a>
          </div>
        </section>

        <section id="about" className="min-h-[100vh] py-12">
          <h1 className="mt-14 text-5xl font-bold text-center">
            <span className="text-blue-600">Tentang</span> Kami
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-40 mt-12">
            <div className="w-full md:w-5/12 flex justify-center md:justify-end">
              <Image
                src="/pakeko.png"
                alt="Ikan Segar Sambas"
                width={400}
                height={300}
                className="rounded-xl max-w-sm md:max-w-md shadow-lg -mt-6"
              />
            </div>

            <div className="w-full md:w-5/12 text-center md:text-left text-gray-700 leading-relaxed px-4">
              <h2 className="font-semibold text-3xl mb-4 text-blue-600">
                Kenapa Memilih Ikan Kami?
              </h2>
              <p className="text-lg max-w-md mx-auto md:mx-0">
                <span className="font-semibold">EKO</span> adalah penyedia ikan
                segar berkualitas tinggi yang diambil langsung dari{" "}
                <span className="font-semibold">Sambas</span>, Kalimantan Barat.
                Kami bekerja sama dengan nelayan lokal untuk memastikan setiap
                ikan ditangkap segar, diproses higienis, dan dikirim tanpa
                perantara.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="min-h-[100vh] py-12">
          <h1 className="text-5xl font-bold text-center mt-14">
            <span className="text-blue-600">Produk</span> Kami
          </h1>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              const message = `Halo, saya ingin membeli *${
                product.name
              }* seharga Rp ${product.price.toLocaleString(
                "id-ID"
              )}. Apakah masih tersedia?`;
              const whatsappLink = `https://wa.me/6285345568123?text=${encodeURIComponent(
                message
              )}`;

              return (
                <div
                  key={product.id}
                  className="border rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-xl mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <p className="font-bold text-blue-600 mb-4">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block bg-blue-600 font-bold text-white text-center py-2 rounded-md hover:bg-green-600 transition"
                    >
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="min-h-[100vh] py-12">
          <h1 className="text-5xl font-bold text-center mt-14">
            <span className="text-blue-600">Hubungi</span> Kami
          </h1>

          <div className="flex flex-col justify-center items-center mt-12 px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Alamat & Informasi Kontak
            </h2>
            <p className="text-gray-600 mb-2">
              📍 Jl. Dagang Barat, Kalimantan Barat, Indonesia
            </p>
            <p className="text-gray-600 mb-2">📞 0853-4556-8123</p>
            <p className="text-gray-600 mt-4 max-w-md">
              Kami siap melayani pesanan dan pertanyaan Anda setiap hari 24 jam.
            </p>
            <a
              href="https://wa.me/6285345568123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
            >
              Chat via WhatsApp
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
