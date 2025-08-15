const Footer = () => {
  return (
    <div className="border-t border-accent py-4 mt-[4rem] items-center flex justify-center">
      <p className="text-center text-xs md:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Reydel Ocon. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
