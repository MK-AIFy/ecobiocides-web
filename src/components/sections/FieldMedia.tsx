import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { AZAGRO_RANGE, FIELD_VIDEOS, mediaUrl, STORY_GALLERY } from "@/lib/media";

const campaignImages = [
  ...AZAGRO_RANGE.map((item) => ({
    image: item.family,
    title: `Azagro ${item.ppm}`,
    alt: `Azagro ${item.ppm} product range`,
  })),
  {
    image: AZAGRO_RANGE[3].alternateFamily,
    title: "Azagro 10000 PPM · field edition",
    alt: "Azagro 10000 PPM range against a dramatic farm landscape",
  },
];

export default function FieldMedia() {
  return (
    <section id="field-stories" className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-emerald-700">Products in focus</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">See the portfolio from every angle.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Product packs, botanical science, field context and supplied video stories—organized into one visual resource center.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {FIELD_VIDEOS.map((video, index) => (
            <article key={video.src} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-lg">
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  poster={mediaUrl(video.poster)}
                  aria-label={`Ecobiocides ${video.title}`}
                >
                  <source src={mediaUrl(video.src)} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
              <div className="flex items-center gap-3 px-5 py-4 text-white">
                <PlayCircle className="h-5 w-5 text-lime-300" />
                <p className="text-sm font-bold">Field story {String(index + 1).padStart(2, "0")}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-emerald-700">Azagro pack gallery</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-950 sm:text-3xl">Every concentration, ready for market.</h3>
            </div>
            <p className="hidden text-sm text-slate-500 sm:block">Scroll to explore →</p>
          </div>
          <div className="hide-scrollbar -mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            {campaignImages.map((item) => (
              <figure key={item.image} className="group min-w-[86vw] snap-center overflow-hidden rounded-[1.6rem] bg-emerald-950 sm:min-w-[66vw] lg:min-w-[47%]">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={mediaUrl(item.image)} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" sizes="(max-width: 640px) 86vw, (max-width: 1024px) 66vw, 47vw" />
                </div>
                <figcaption className="px-5 py-4 text-sm font-bold text-white">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow text-emerald-700">Nature × science</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-950 sm:text-3xl">The complete visual story.</h3>
          <div className="mt-7 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {STORY_GALLERY.map((item, index) => (
              <figure key={item.image} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.4rem] bg-slate-100">
                <div className={`relative ${index % 5 === 0 ? "aspect-[4/3]" : index % 4 === 0 ? "aspect-square" : "aspect-[3/2]"}`}>
                  <Image src={mediaUrl(item.image)} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold text-white">{item.title}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
