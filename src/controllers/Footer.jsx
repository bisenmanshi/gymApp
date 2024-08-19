
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../img/blog/kindpng_2676215.png";
 // Assuming you have structured data for footer links

const Footer = () => {
  // Sample data for footer sections
  const Resources = [
    "Personal Training",
    "Online Coaching",
    "Nutrition Plans",
    "Group Classes",
    "Specialized Workouts",
    "Fitness Events",
    "Blog",
  ];

  const MembershipPlans = [
    "Monthly Membership",
    "Annual Membership",
    "Student Plans",
    "Corporate Packages",
  ];

  const Community = ["Events", "Forums", "Local Chapters", "Social Media"];

  const BottomLinks = ["Privacy Policy", "Cookie Policy", "Terms of Service"];

  return (
    <footer className="bg-slate-800 text-slate-400 py-10">
      <div className="container mx-auto flex flex-wrap gap-8 justify-between items-start px-4">
        {/* Logo and Company Info */}
        <div className="w-full lg:w-1/4">
          <img src={logo} alt="Logo" className="h-12 w-24 mb-4 object-cover" />
          <p className="mb-4">
            Your gym's mission is to empower individuals through fitness,
            wellness, and community engagement.
          </p>
          <div className="flex gap-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-slate-50 transition-colors duration-300" />
            <FaGoogle className="text-2xl cursor-pointer hover:text-slate-50 transition-colors duration-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-slate-50 transition-colors duration-300" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-slate-50 transition-colors duration-300" />
          </div> 
        </div>

        {/* Sections: Services, Membership, Community */}
        <div className="flex flex-wrap gap-8 w-full lg:w-3/4">
          {/* Services */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {Resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-slate-50 transition-colors duration-300"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership Plans */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Membership Plans</h3>
            <ul className="space-y-2">
              {MembershipPlans.map((plan, index) => (
                <li key={index}>
                  <Link
                    to={`/membership/${plan.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-slate-50 transition-colors duration-300"
                  >
                    {plan}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {Community.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/community/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-slate-50 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-slate-700 mt-8 py-4 flex flex-wrap items-center justify-between">
        <div className="flex gap-4">
          {BottomLinks.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-slate-50 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
        <p className="text-sm">
          Made with ❤️ Your Gym Name &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
