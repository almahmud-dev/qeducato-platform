import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiCompass } from "react-icons/fi";
import Container from "@/components/UI/Container";
import notFoundLinks from "@/helper/notFoundLinks";
import DirectionalButton from "./common/DirectionalButton";

export default function NotFoundPage() {
  return (
    <section
      className="overflow-hidden bg-white"
      aria-labelledby="not-found-heading"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: text content */}
          <div className="text-center md:text-left">
            <p
              className="text-[70px] font-extrabold leading-none text-secondary sm:text-[100px] md:text-[130px]"
              aria-hidden="true"
            >
              404
            </p>

            <h1
              id="not-found-heading"
              className="mt-3 text-2xl font-bold text-secondary sm:text-3xl"
            >
              <span className="text-primary">Oops!</span> Page Not Found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-gray-500 md:mx-0">
              The page you are looking for doesn&apos;t exist or has been moved.
              Don&apos;t worry, you can find plenty of other things on our
              homepage.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <DirectionalButton
                href="/"
                label="Back to Home"
                leftIcon={<FiArrowLeft size={16} />}
                bgColor="#FF5101"
                flairColor="#125875"
                borderColor="#FF5101"
                textColor="#ffffff"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-sm px-5 py-5.5"
              />
              <DirectionalButton
                href="/courses"
                label="Explore Programs"
                rightIcon={<FiCompass size={16} />}
                bgColor="transparent"
                flairColor="#0d3d4f"
                borderColor="var(--text-primary)"
                textColor="var(--text-primary)"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-sm px-5 py-5.5"
              />
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <Image
              src="/images/404.webp"
              alt="Illustration of a confused student sitting with a laptop in front of a university building"
              width={600}
              height={500}
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-secondary">
              You Can Try These
            </h2>
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {notFoundLinks.map(
              ({ id, icon: Icon, title, description, href, iconClass }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${iconClass}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-secondary">{title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
                    <FiArrowRight
                      className="mt-4 h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}
