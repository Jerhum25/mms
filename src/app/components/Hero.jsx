import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="w-full h-auto flex justify-center relative ">
      <div className="absolute top-0 left-0 xl:w-[70%] w-full flex ml-[50%] translate-x-[-50%] h-full z-0 ">
        <Image
          fill
          unoptimized
          alt="fond hero"
          src="/images/cuisine2.png"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-full bg-linear-to-r from-[#18293E] to-transparent  absolute top-0 left-0 z-5"></div>
      <div className="xl:w-[70%] w-full h-screen relative z-100">
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-center gap-10 px-5  ">
          <h1 className="uppercase -mb-8">artisan tous corps d'état</h1>
          <h2 className="text-5xl font-bold">Des travaux de qualité pour un intérieur qui vous ressemble</h2>
          <p>
            Plomberie, électricité, peinture, sols, plafonds... une seule
            entreprise pour tous vos petits travaux et vos projets de
            rénovation.
          </p>
          <div className="flex items-center sm:justify-start justify-center">
            <button className="bg-[#E6993B] rounded-full px-5 py-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                />
              </svg>
              <a href="tel:0606060606" className="font-semibold">Demander un devis gratuit</a>
            </button>
          </div>
          <div>
            <ul className="flex sm:flex-row flex-col sm:gap-10 gap-3">
              <li className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"
                  />
                </svg>
                <p className="text-sm">Travail soigné et garanti</p>
              </li>
              <li className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0l-2 3m2-8v5"
                  />
                </svg>
                <p className="text-sm">Réactivité et disponibilité</p>
              </li>
              <li className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
                    <circle cx="12" cy="10" r="3" />
                  </g>
                </svg>
                <p className="text-sm">Intervention à Besançon et alentours</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
