import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";
import { mediaUrl } from "@/lib/media";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-emerald-950 px-4 py-32 text-white sm:px-6">
      <Image src={mediaUrl("/media/story/neem-shield.webp")} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-emerald-950/85" />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-emerald-950"><Leaf className="h-7 w-7" /></div>
        <p className="mt-7 font-display text-8xl font-extrabold text-lime-300 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">This page has moved beyond the field.</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-white/65">The address may be outdated, or the page may no longer exist. Return home to continue exploring our botanical portfolio.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-extrabold text-emerald-950 transition-colors hover:bg-lime-200"><ArrowLeft className="h-4 w-4" />Back to homepage</Link>
      </div>
    </main>
  );
}
