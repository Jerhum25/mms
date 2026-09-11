import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function APropos() {
  return (
    <div className="w-full h-auto flex justify-center" id="apropos">
      <div className="xl:w-[70%] w-full  bg-gray-100 flex sm:flex-row flex-col  text-black ">
        <div className="sm:w-[30%] w-full h-64 sm:h-auto relative">
          <Image
          fill
            unoptimized
            alt="fond hero"
            src="/images/bricoleur.webp"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="sm:w-[70%] w-full px-5 py-10 flex flex-col gap-3 relative">
          <h2 className="uppercase ">à propos</h2>
          <h3 className="text-3xl font-bold">
            Un artisan de confiance à votre service
          </h3>
          <p>
            Fort de plusieurs années d'expérience, je mets mon savoir-faire à
            votre disposition pour tous vos travaux, du plus petit dépannage à
            la rénovation complète. Mon objectif : vous apporter des solutions
            durables et un résultat à la hauteur de vos attentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  w-full py-5">
            <div className="flex gap-2 items-center ">
              <div className="bg-white w-fit p-2.5 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#18293E"
                    d="M18 8V7h-7v1h-1v1H9v1H8v2h3v-1h1v-1h1V9h2v1h1v1h1v1h1v1h1v1h2v-1h2v2h-1v1h-2v1h-1v1h-1v1h-1v1h-3v1H8v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-2h2v1h1v1h1v1h1v1h1v1h1v1h1v-1H8v-1H7v-1h2v1h1v1h1v1h2v-1h-1v-1h-1v-1h-1v-1h2v1h1v1h1v1h3v-1h-2v-1h-1v-1h-1v-1h2v1h1v1h2v-1h-1v-1h-1v-1h-1v-1h-2v1h-2v1H8v-1H7v-1H6v-2h1V9h1V8h1V7H6v1H5V7H3V6H1V4h2v1h2v1h1V5h12v1h1V5h2V4h2v2h-2v1h-2v1z"
                  />
                </svg>
              </div>
              <p className="text-sm flex-1">
                Conseils personnalisés et devis gratuits
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="bg-white w-fit p-2.5 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#18293E"
                    d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                  />
                </svg>
              </div>
              <p className="text-sm">Respect des délais et du budget</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white w-fit p-2.5 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#18293E"
                    d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"
                  />
                </svg>
              </div>
              <p className="text-sm">
                Un interlocuteur unique pour tous vos travaux
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
