import React from "react";

const Footer = () => {
  const linkClass = "py-2 text-sm block";
  const sectionClass = "text-left";

  const footerSections = [
    {
      title: "HOME",
      links: [
        "Discover our works",
        "Our community",
        "Industries we work with",
        "Phases of video production",
      ],
    },
    {
      title: "PORTFOLIO",
      links: [
        "Animated Explainer Videos",
        "Promo Videos",
        "Demo Videos",
        "Tutorial Videos",
        "How-To Videos",
        "Company Overview Videos",
      ],
    },
    {
      title: "TEAM",
      links: ["Our Positions", "Join us"],
    },
    {
      title: "CONTACT US",
      links: ["For Cooperation", "Send your CV"],
    },
  ];

  return (
    <footer className="pt-20 px-6 md:px-10 lg:px-40 bg-gray-100">
      <nav
        className="flex flex-col md:flex-row justify-between gap-10"
        aria-label="Footer navigation"
      >
        {footerSections.map((section, index) => (
          <div className={sectionClass} key={index}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul>
              {section.links.map((text, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className={linkClass}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="flex flex-col items-end">
        <div className="pb-6 text-right">
          <b>
            US, FL (GMT-4){" "}
            {new Date().toLocaleString("en-US", {
              timeZone: "America/New_York",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </b>
          <p className="text-sm">19683 W Country Club Dr, Miami</p>
        </div>

        <div className="pb-6 text-right">
          <b>
            Armenia, (GMT+4){" "}
            {new Date().toLocaleTimeString("en-US", {
              timeZone: "Asia/Yerevan",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </b>
          <p className="text-sm">3 Moskovyan Street, Yerevan</p>
        </div>
        <p className="text-sm">partner@saascend.com</p>
      </div>
      <p className="text-center text-xs mt-16 pb-6 font-medium">
        <hr className="pb-6" />
        &copy; 2025 Saascend. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
