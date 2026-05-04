/** Images for Study / Work pathway pages (public/). */
export const JAPAN_PATHWAY_IMAGES = {
  study: {
    card: "/tourist-looking-fuji-mountain-cherry-blossom-spring-fujinomiya-japan.jpg",
    detail: [
      "/happy-student-with-graduation-hat-diploma-grey.jpg",
      "/close-up-pupils-doing-japanese-calligraphy-called-shodo.jpg",
      "/man-practicing-japanese-handwriting-with-brush.jpg",
    ],
  },
  work: {
    card: "/asian-business-people-city-working-together.jpg",
    detail: [
      "/learning-programming-language.jpg",
      "/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office.jpg",
      "/portrait-business-people-worker-team-outside.jpg",
    ],
  },
} as const;

export type JapanPathwayKey = keyof typeof JAPAN_PATHWAY_IMAGES;
