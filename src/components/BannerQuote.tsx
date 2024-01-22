import React from "react";

import bannerBg from "../assets/img/bannerbg.webp";
import { useQuoteAnimation } from "../hooks/useQuoteAnimation";

interface BannerProps {
  style: "withBG" | "noBG";
  containerType: string;
}

const BannerQuote: React.FC<BannerProps> = ({ style, containerType }) => {
  useQuoteAnimation(`.${containerType}-container h2`);

  return style === "withBG" ? (
    <React.Fragment>
      <section className="quote-banner relative overflow-x-clip z-[1]">
        <div
          className="quote-outer-container bg-[--darkblue] h-[50vh] -rotate-3 flex justify-center items-center scale-110 max-lg:h-full min-[1921px]:px-96"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="quote-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20 ">
            <h2 className="text-[--white] text-center text-8xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight">
              Frontend development is not just about writing code; it's about
              creating experiences. Make every interaction count.
            </h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <section className="quote-banner relative overflow-x-clip min-[1921px]:px-96">
        <div className="h-[50vh] -rotate-3 flex justify-center items-center scale-110">
          <div className="statement-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20">
            <h2 className="text-[--black] text-center text-8xl mb-20 mt-20 max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight">
              Versatile skill set in web development and design, dedicated to
              creating user-centric experiences.
            </h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BannerQuote;
