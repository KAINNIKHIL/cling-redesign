import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Praveen Shetty",
    role: "",
    company: "",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Ftes1.png&w=1080&q=75",
    content:
      "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Swatee Agrawal",
    role: "Founder",
    company: "Piaah.com",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Fswatee.jpeg&w=1080&q=75",
    content:
      "Cling Info Tech's professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
    rating: 4,
  },
  {
    id: 3,
    name: "Elizabeth Jean Thomas",
    role: "Founder",
    company: "Speech Ally",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Felizabeth.jpeg&w=1080&q=75",
    content:
      "Choosing Cling Info Tech was one of the best decisions we made. Their team's creativity and strategic approach transformed our vision into reality. I'm grateful for their outstanding support and guidance throughout the process.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ashish Kumar",
    role: "Director",
    company: "Vibgyorweb",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Fashish-profile.jpg&w=1080&q=75",
    content:
      "Cling Info Tech exceeded all our expectations with their professionalism and efficiency. Their understanding of our requirements was exceptional, and they consistently went above and beyond to deliver outstanding results.",
    rating: 5,
  },
  {
    id: 5,
    name: "Shams Tabrez",
    role: "Director",
    company: "Litmus Ink",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Fshams.png&w=1080&q=75",
    content:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    rating: 4,
  },
  {
    id: 6,
    name: "Arif",
    role: "",
    company: "",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2FTestimonial-03.jpeg&w=1080&q=75",
    content:
      "Working with Cling Info Tech was a game-changer for our business. Their expertise and dedication helped us achieve remarkable results. I highly recommend them to anyone looking for top-notch service",
    rating: 5,
  },
{
    id: 7,
    name: "Aurko Bhattacharya",
    role: "Co-founder",
    company: "ePayLater",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Faurko.jpeg&w=1080&q=75",
    content:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    rating: 5,
  },
  {
    id: 8,
    name: "Gourav Singh",
    role: "CFO",
    company: "Webisdom",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Fgourav.jpeg&w=1080&q=75",
    content:
      "Working with Cling Info Tech was an absolute pleasure throughout. In today's fiercely competitive market, finding a partner who truly understands your needs is invaluable, and Cling Info Tech excels exceptionally in this regard.",
    rating: 4,
  },
  {
    id: 9,
    name: "Shubhanshu Srivastava",
    role: "",
    company: "",
    avatar: "https://clinginfotech.com/_next/image?url=%2Fassests%2Ftestimonial-04.jpeg&w=1080&q=75",
    content:
      "Cling Info Tech' professionalism and efficiency surpassed our expectations, understanding our needs exceptionally well. Rarely do we find such a reliable partner in today's market. Their dedication sets them apart.",
    rating: 4,
  },

  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive number of visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  // Keep index valid when screen size changes
  useEffect(() => {
    const maxIndex = Math.max(
      testimonialsData.length - visibleCards,
      0
    );

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  const maxIndex = Math.max(
    testimonialsData.length - visibleCards,
    0
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    if (isPaused || testimonialsData.length <= visibleCards) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, visibleCards]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-rose-50/30 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-red-200/40 blur-[100px]" />

        <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-rose-100 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-red-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600" />
            Testimonials
          </div>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Your voice,{" "}
            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
              our pride.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Dive into the heartfelt accounts of our valued patrons. From
            life-changing experiences to exceptional service, their stories
            illuminate the essence of our commitment.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto mt-20 max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonials"
            className="absolute -left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white sm:-left-6"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white sm:-right-6"
          >
            <ChevronRight size={20} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-2 py-8">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 shrink-0 px-3"
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >
                  <article className="group relative flex h-full min-h-[440px] flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10 sm:p-8">
                    {/* Avatar */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="relative">
                        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-md ring-2 ring-red-100 transition-transform duration-300 group-hover:scale-105">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                          <Quote size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-7">
                      {/* Stars */}
                      <div className="mb-5 flex justify-center gap-1">
                        {Array.from({
                          length: item.rating,
                        }).map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-center text-[15px] leading-7 text-slate-600">
                        “{item.content}”
                      </p>
                    </div>

                    {/* Author */}
                    <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                      <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-red-600">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.role}
                        {item.company && ` — ${item.company}`}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-red-600 transition-all duration-300 group-hover:w-16" />
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        {maxIndex > 0 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-red-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;