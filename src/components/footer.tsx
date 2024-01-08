import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "Products", "Our Team", "Contact"];
const SOCIAL_LINKS = {
  Twitter: "https://twitter.com/yourcompany",
  Facebook: "https://facebook.com/yourcompany",
  Instagram: "https://instagram.com/yourcompany",
};
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-300 py-6 md:justify-between">
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                  placeholder=""
                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="blue" placeholder="">Subscribe</Button>
          </ul>
          <div>
            {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
              <a key={name} href={url} className="mr-4 text-gray-700 hover:text-gray-900 transition-colors">
                <i className={`fab fa-${name.toLowerCase()}`}></i>
              </a>
            ))}
          </div>
          <Typography className="text-center font-normal !text-gray-700" placeholder="">
            &copy; {CURRENT_YEAR} ForNerd. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
