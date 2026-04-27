/** Images for Study / Work pathway pages (public/). */
export const JAPAN_PATHWAY_IMAGES = {
  study: {
    card: "/learning-education-ideas-insight-intelligence-study-concept.jpg",
    detail: [
      "/hero-university.png",
      "/close-up-pupils-doing-japanese-calligraphy-called-shodo.jpg",
      "/man-practicing-japanese-handwriting-with-brush.jpg",
    ],
  },
  work: {
    card: "/unrecognizable-businesswoman-working-office-writing-business-plans-her-notebook.jpg",
    detail: [
      "/smiling-business-people-holding-meeting-office.jpg",
      "/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office.jpg",
      "/portrait-business-people-worker-team-outside.jpg",
    ],
  },
} as const;

export type JapanPathwayKey = keyof typeof JAPAN_PATHWAY_IMAGES;
