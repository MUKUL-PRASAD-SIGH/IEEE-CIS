import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  const images = Array.from({ length: 15 }, (_, i) => `/gallery/image${i + 1}.png`)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-white via-ieee-sky/30 to-white pt-28 pb-20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-ieee-blue/5 rounded-full blur-[80px] -z-10 animate-pulse-glow" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-ieee-blue-light/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ieee-blue-dark mb-4 drop-shadow-sm">
              Event Gallery
            </h1>
            <p className="text-lg text-ieee-gray-text max-w-2xl mx-auto">
              Memories from our latest activities, workshops, and student community engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ease-out hover:-translate-y-2 aspect-[4/3] animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Decorative glow behind the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-ieee-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
