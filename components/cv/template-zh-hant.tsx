import { ResumeOriginalTemplate } from "@/components/cv/template-original";
import { CVData } from "@/data/cv.types";

type CVTemplateZhHantProps = {
  cv: CVData;
};

export function CVTemplateZhHant({ cv }: CVTemplateZhHantProps) {
  return (
    <ResumeOriginalTemplate
      aboutTitle="個人介紹"
      bodyFontClass="font-resume-cjk"
      cv={cv}
      projectsTitle="項目經驗"
      skillsTitle="專業技能"
    />
  );
}
