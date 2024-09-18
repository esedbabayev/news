import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Blog", href: "/blog" },
    { id: 5, label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <ul>
        {navItems &&
          navItems.map((item) => (
            <Link href={item.href}>
              <li key={item.id}>{item.label}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Header;
