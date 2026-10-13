import { Cpu, TrendingUp, Users, type LucideIcon } from "lucide-react";

const IMG = "https://kdmagency.com";
const up = (f: string) => `${IMG}/uploads/kdm/${f}.webp`;

/**
 * Is file me About page ka saara content hai.
 * Apni agency ki asli story, team aur images yahan se replace kar lo.
 * (Images abhi KDM ke server se aa rahi hain — apni `public/images/about/` me rakh ke `/images/about/x.webp` use karna behtar hai.)
 */

export const ABOUT_IMAGES = {
  story1: `${IMG}/assets/images/aboutus/about-img-1.webp`,
  story2: `${IMG}/assets/images/aboutus/about-img2.webp`,
  values1: `${IMG}/assets/images/aboutus/about-img-3.webp`,
  values2: `${IMG}/assets/images/aboutus/about-img-4.webp`,
};

export const STORY = {
  title: "A Digital Marketing Agency That Builds Brands, Not Just Buzz",
  paragraphs: [
    "We started with small and local businesses — a shoe brand trying to grow beyond its retail outlet, a lighting company looking to attract interior designers, a home-based bakery that needed branding, and a neighbourhood café that wanted visibility on Google. These weren't just clients; they were our learning ground.",
    "We built simple yet strategic websites, launched early Facebook ad campaigns, improved their SEO, and created brand identities that resonated with their audience. These hands-on experiences helped us understand what works, and more importantly, why it works.",
  ],
};

export interface Value { title: string; text: string; icon: LucideIcon }

export const VALUES_INTRO =
  "It's not just marketing, it's momentum. We wake up every day with one goal: to help businesses grow. For us, no brief is too small, and no campaign is just another task. Every project is a chance to solve, create, and move brands forward.";

export const VALUES: Value[] = [
  { title: "Growth-Focused Vision", icon: TrendingUp, text: "Every strategy we build is tied to growth that is measurable, scalable, and aligned with real business goals, not vanity metrics." },
  { title: "Experienced Leadership Team", icon: Users, text: "Led by marketing industry experts, our leadership blends insight, innovation, and years of experience to drive results that truly matter." },
  { title: "Powered by Technology", icon: Cpu, text: "We leverage the latest digital tools, analytics platforms, and web development technologies to deliver smart, future-ready solutions for every brand." },
];

export const TEAM = [
  { name: "Fahim Ismail Begawala", role: "Chief Executive Officer", image: up("62ZXmH9LlVYMkO2bJ9SsZel1znJ9W1e1UkBn7M30") },
  { name: "Aamir Ashraf", role: "Chief Commercial Officer", image: up("TrxfY9sekebwWutwQAPxeY971SfbMu7aUVkDJxKr") },
  { name: "Azhar Ahmed Saifi", role: "Chief Operating Officer", image: up("wxnXylnMfgDJMlXeCKKrqtqTJ6NAMlyIgGYJjg3W") },
];

export const TECH_STACK = [
  { name: "React", logo: up("tvxFOg7YLUxq63cPBXwmiduOCd5kZKGl6ZvOSQBF") },
  { name: "PHP", logo: up("znBb680VoYwk5qgsDx4XVWUR0DZARjn9VfcbVDR5") },
  { name: "Python", logo: up("b4v76sc0aWaKQyIwA9YsLIp0z7HoyyVxDxEl2og4") },
  { name: "JavaScript", logo: up("8OBZDkXxO9l7aNeoaHmBBYZPZwH0CsxokgPVbabQ") },
  { name: "MySQL", logo: up("j7AhInHl56acmWcTtToJD1M1LhjiTTW2NkZrARQd") },
  { name: "Bootstrap", logo: up("JNWillQQCy7DmSraPyac23VtxaY8FErrTjRYD0Za") },
  { name: "Node.js", logo: up("9B2bwvWc3LmVaIzaFd7FPJ13n2yYPu6OSnvLal69") },
  { name: "Google Analytics", logo: up("CwohBo4W6Ruace9FXUnrJkwNjE0UxRvuVUKJa8MN") },
  { name: "Google Trends", logo: up("JxQm7K34nsxID0voZPnJjpOKg47VAdHxWG4wL4hY") },
  { name: "Semrush", logo: up("BxLnii3Wys1Wwqgv67CM86d5HE0rMdsoLEodWh4m") },
  { name: "Google Search Console", logo: up("eWTpEbp08c8EdtECjj9xocQd3ZxntI0CynzUqSyL") },
  { name: "Moz", logo: up("9Ji8Ld8IFw1frwgaRFLcaPV0lgCEgTRXkYkIpADM") },
  { name: "Ahrefs", logo: up("tPwC7LPEjGqquD4CF2Kp7iDsFltmnlDDym9enGZN") },
  { name: "Google Ads", logo: up("5bbz6OAw4NMtIfKERt9ICNlV0xJ9AXCJCyToyDGc") },
  { name: "Adobe Illustrator", logo: up("cGcbpbnWtboaZXGeEk4Q8uADaLFdeyXQ8Ckdckuy") },
  { name: "Adobe Photoshop", logo: up("Wk7kVgR53rFsR6T7rpF9ZCrYMDfmO4t8qtIuvDxY") },
  { name: "Adobe Premiere Pro", logo: up("xGX5r8gZQ6yPpv3s3YuUU4QOCX0bNBZiHL9DKYCD") },
  { name: "Figma", logo: up("mJoxqAE0Ak50c0nUINEEcqrVGizspjah02fJ0NC7") },
  { name: "Adobe After Effects", logo: up("4cW5sGk5NVL7ddTFRHKAXtxDDTwvGzzuNa4c9xpB") },
];

export const GALLERY = [
  "HDJOS925qBja7oLGoeTTEmLNBiXtplJOgGCmnu2K",
  "qYy7jwXZGafKOD09nmlOwJHK0j7zm2LRLuLqjj4v",
  "ej8SWVmCBzYPi9i8uCTIBnl7MUOpNzB00c2u2ohY",
  "90RVQF25Pt0H8q4wLZsMJMTlZB36epPcLy4T1rNv",
  "6briiKZuuUcnVyyUPaMJzoeuOM68g1CrUXCEnA6o",
  "JM28S6deysTYBbX7wjF2zSguOglWPR3iNqv3anK1",
  "CIznsurtz73gvbDhQEUspIXBcjEQ7uSITLaBkmNK",
  "3YdcCIOL0mSfayqAgqCHa25A4GBCRMNsX4nFsdzG",
].map(up);
