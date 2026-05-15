import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaProductHunt, FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import SocialLink from "./components/SocialLink";
import { Lobster } from "next/font/google";
import { productionApplications } from "./utils/utils";
import Link from "next/link";
import ProductionApplicationCard from "./components/ProductionApplicationCard";
import type { Metadata } from "next";

export const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahnaf Shahriar Muiz",
  url: "https://ahnafshahriarmuiz.com/", // ← your domain
  email: "ahanafshahariarmuiz@gmail.com",
  jobTitle: "Full-Stack Developer & Designer",
  description:
    "Self-taught full-stack developer from Bangladesh who designs, builds, and ships polished web applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dinajpur",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/ahanafshahariarmuiz",
    "https://www.linkedin.com/in/ahnafshahriarmuiz/",
    "https://x.com/AhnafSMuiz",
    "https://www.producthunt.com/@ahnaf_shahriar_muiz",
  ],
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full h-full relative">
        {/* Body section */}
        <main className="max-w-380 mx-auto pb-30 max-lg:pb-10 max-[1560px]:px-4">
          <header className="flex items-center justify-between mt-6">
            <Link href={"/"} aria-label="Ahnaf Shahriar Muiz — Home">
              <Image
                src={"/logo.svg"}
                width={81}
                height={28}
                alt="Ahnaf Shahriar Muiz logo"
                priority
              />
            </Link>
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-2 max-lg:gap-1 list-none m-0 p-0">
                <li>
                  <SocialLink
                    Icon={FaGithub}
                    url="https://github.com/ahanafshahariarmuiz"
                    label="GitHub profile"
                  />
                </li>
                <li>
                  <SocialLink
                    Icon={FaLinkedin}
                    url="https://www.linkedin.com/in/ahnafshahriarmuiz/"
                    label="LinkedIn profile"
                  />
                </li>
                <li>
                  <SocialLink
                    Icon={FaXTwitter}
                    url="https://x.com/AhnafSMuiz"
                    label="X (Twitter) profile"
                  />
                </li>
                <li>
                  <SocialLink
                    Icon={FaProductHunt}
                    url="https://www.producthunt.com/@ahnaf_shahriar_muiz"
                    label="Product Hunt profile"
                  />
                </li>
              </ul>
            </nav>
          </header>

          <div className="w-full flex items-start justify-between mt-14 gap-8 max-lg:flex-col">
            <article
              className="w-2/3 flex flex-col items-start max-lg:w-full max-lg:items-center"
              aria-label="Introduction"
            >
              <Image
                src="/me.svg"
                width={200}
                height={200}
                alt="Portrait illustration of Ahnaf Shahriar Muiz, full-stack developer"
                priority
              />
              <h1 className="w-full mt-8 text-8xl max-xl:text-7xl max-lg:text-6xl font-bold text-orange-950 max-lg:text-center">
                Hi, I am Ahnaf <br /> <span>Shahriar</span> <br />{" "}
                <span className={`${lobster.className}`}>muiz.</span>
              </h1>
              <p className="text-lg font-medium text-orange-950 max-lg:text-center leading-7.5 max-w-150 mt-3">
                I&apos;ve dedicated a lot of time to teaching myself how to
                design, build, and launch web applications. I enjoy turning
                ideas into polished products, with a strong focus on clean
                design, performance, and practical user experiences.
              </p>
            </article>

            <aside
              className="w-125 shrink-0 max-lg:mt-10 max-lg:w-full"
              aria-label="Portfolio work"
            >
              <section aria-labelledby="production-apps-heading">
                <h2
                  id="production-apps-heading"
                  className="text-xl tracking-[0.3rem] uppercase font-medium text-orange-950 max-lg:text-center"
                >
                  Production Applications
                </h2>
                <ul className="w-full flex flex-col gap-1 mt-8 list-none m-0 p-0">
                  {productionApplications.map(({ id, name, logo, url }) => (
                    <li key={id} className="border-b border-gray-950/20 pb-1">
                      <ProductionApplicationCard
                        name={name}
                        logo={logo}
                        url={url}
                      />
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-orange-950 mt-4">
                  1 Application
                </p>
              </section>

              <section aria-labelledby="projects-heading" className="mt-14">
                <h2
                  id="projects-heading"
                  className="text-xl tracking-[0.3rem] uppercase font-medium text-orange-950 max-lg:text-center"
                >
                  Projects
                </h2>
                <div
                  className="w-full mt-8 h-70 rounded-xl border-3 border-dashed grid place-content-center bg-orange-100/40 border-orange-200"
                  role="status"
                  aria-live="polite"
                >
                  <span className="text-md font-medium text-orange-900">
                    No projects available yet!
                  </span>
                </div>
                <p className="text-sm font-semibold text-orange-950 mt-4">
                  0 Projects
                </p>
              </section>
            </aside>
          </div>
        </main>
        {/* Footer section */}
        <footer className="w-full h-18 max-lg:h-40 bg-orange-300 lg:fixed bottom-0">
          <div className="max-w-380 flex items-center justify-between h-full mx-auto max-[1560px]:px-4 max-lg:flex-col max-lg:justify-center max-lg:gap-2">
            <address className="not-italic flex items-center gap-1.5 text-orange-950">
              <LuMail size={16} aria-hidden="true" />
              <a
                href="mailto:ahanafshahariarmuiz@gmail.com"
                className="text-md font-medium hover:underline"
                aria-label="Send email to Ahnaf Shahriar Muiz"
              >
                ahanafshahariarmuiz@gmail.com
              </a>
            </address>
            <p className="text-md font-medium text-orange-950 m-0">
              Dinajpur, Bangladesh
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
