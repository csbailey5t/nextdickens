import Link from "next/link";
import dynamic from "next/dynamic";

const MiradorWithNoSSR = dynamic(() => import("../components/Mirador"), {
  ssr: false,
});

// const manifest =
//   "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/dc/manifest.json";

const manifest = "https://dreamy-jackson-498548.netlify.app/img/derivatives/iiif/dc/manifest.json"

// const manifest = "localhost:4000/img/derivatives/iiif/dc/manifest.json"

export default function DavidCopperfield() {
  return (
    <div className="container mx-auto">
      <Link href="/">
        <a className="hover:underline focus:underline">Back to home</a>
      </Link>
      <h1 className="text-5xl text-blue-600 font-serif mt-2">
        David Copperfield Working Notes
      </h1>
      <MiradorWithNoSSR loadedManifest={manifest} />
    </div>
  );
}
