import useTranslation from "next-translate/useTranslation";

import { TextPrimaryAnimated } from "../../_shared";

export default function AboutTextComponent() {
  let { t } = useTranslation();

  return (
    <div className="about-left-side primary-text">
      <TextPrimaryAnimated text={t("about:about_text01")} />
      <br />
      <TextPrimaryAnimated text={t("about:about_text02")} />
      <br />
      <TextPrimaryAnimated text={t("about:about_text03")} />
      <br />
      <TextPrimaryAnimated text={t("about:about_text04")} />
    </div>
  );
}
