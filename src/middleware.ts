import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about-us",
    "/contact-us",
    "/blogs",
    "/blog/[slug]",
    "/careers",
    "/faqs",
    "/policy",
    "/newsletter",
    "/our-services",
    "/api/admin/jobs",
    "/api/admin/jobs/954563584095649793",

  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],


};
