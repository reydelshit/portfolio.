const Footer = () => {
  return (
    <div className="border-accent mt-[4rem] flex items-center justify-center border-t py-4">
      <p className="text-center text-xs text-gray-500 md:text-sm">
        &copy; {new Date().getFullYear()} Reydel Ocon. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
