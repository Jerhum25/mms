/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Realisations() {
  return (
    <div className="w-full h-auto flex justify-center" id="realisations">
      <div className="xl:w-[70%] w-full flex flex-col bg-white text-black px-5 py-10">
        <div className=" flex flex-col gap-3">
          <h2 className="uppercase ">nos réalisations</h2>
          <h3 className="text-3xl font-bold">
            Quelques exemples de nos travaux
          </h3>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-8 pt-8
        "
        >
          <div className="flex flex-col gap-3 w-full sm:w-full">
            <div className="w-auto h-44 relative">
              <Image
                fill
                unoptimized
                alt="fond hero"
                src="/images/cuisine1.png"
                className="object-cover"
              />
            </div>
            <p>Rénovation cuisine</p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-full">
            <div className="w-auto h-44 relative">
              <Image
                fill
                unoptimized
                alt="fond hero"
                src="/images/sdb1.png"
                className="object-cover"
              />
            </div>
            <p>Rénovation salle de bain</p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-full">
            <div className="w-auto h-44 relative">
              <Image
                fill
                unoptimized
                alt="fond hero"
                src="/images/sol1.png"
                className="object-cover"
              />
            </div>
            <p>Pose de parquet</p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-full">
            <div className="w-auto h-44 relative">
              <Image
                fill
                unoptimized
                alt="fond hero"
                src="/images/escalier-ext1.png"
                className="object-cover"
              />
            </div>
            <p>Pose d'un garde-corps</p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-full">
            <div className="w-auto h-44 relative">
              <Image
                fill
                unoptimized
                alt="fond hero"
                src="/images/meuble-tv1.png"
                className="object-cover"
              />
            </div>
            <p>Conception meuble TV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
