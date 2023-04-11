import useTranslation from "next-translate/useTranslation";

export default function AboutTextComponent() {
  let { t } = useTranslation();

  return (
    <div className="text-slate-100 mt-12 mr-0 lg:mr-2 z-10">
      <p className="text-xl 2xl:text-2xl font-normal antialiased my-6">
        {t("home:about_text01")}
        <br />
        <br />
        {t("home:about_text02")}
        <br />
        <br />
        {t("home:about_text03")}
        <br />
        <br />
        {t("home:about_text04")}
        <br />
        <br />
        {t("home:about_text05")}
      </p>
    </div>
  );
}