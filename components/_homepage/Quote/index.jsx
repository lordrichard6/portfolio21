import useTranslation from "next-translate/useTranslation";

import { SharedQuotes } from "../../_shared";
import { home_quote } from "../../../assets/data";

export default function HomeQuote() {
  let { t } = useTranslation();

  return (
    <section className="home-quote section-y-short flex-centered w-full mb-20 sm:mb-0 relative">
      <div className="background-gradient" />
      <SharedQuotes
        alt={home_quote.alt}
        img={home_quote.image}
        quote={t(home_quote.quote)}
        author={home_quote.author}
      />
    </section>
  );
}
