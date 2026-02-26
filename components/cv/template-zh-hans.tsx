import { ResumeOriginalTemplate } from "@/components/cv/template-original";
import { CVData } from "@/data/cv.types";

type CVTemplateZhHansProps = {
  cv: CVData;
};

export function CVTemplateZhHans({ cv }: CVTemplateZhHansProps) {
  return (
    <ResumeOriginalTemplate
      aboutTitle="个人介绍"
      bodyFontClass="font-resume-cjk"
      cv={cv}
      projectsTitle="项目经验"
      skillsTitle="专业技能"
    />
  );
}
