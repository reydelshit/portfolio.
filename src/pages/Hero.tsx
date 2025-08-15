import Profile from '@/assets/ang.jpg';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { TiSocialLinkedin } from 'react-icons/ti';

const SocialLinks = [
  {
    platform: 'Email',
    url: 'mailto:reydelocon.dev@gmail.com?subject=hello&body=reydel!',
    icon: <MdOutlineMail className="inline-flex text-xl text-secondary group-hover:text-main" />,
  },

  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/reydelshit/',
    icon: <FaInstagram className="inline-flex text-xl text-secondary group-hover:text-main" />,
  },

  {
    platform: 'GitHub',
    url: 'https://github.com/reydelshit',
    icon: <IoLogoGithub className="inline-flex text-xl text-secondary group-hover:text-main" />,
  },

  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reydel-ocon/',
    icon: <TiSocialLinkedin className="text-xl text-secondary group-hover:text-main" />,
  },
];
const Hero = () => {
  return (
    <section className="flex justify-between md:gap-2 h-fit md:items-center items-start ">
      <div className="w-[80%]">
        <h1 className="font-bold text-lg md:text-3xl">Reydel Ocon</h1>
        <p className="text-xs md:text-sm leading-[20px] font-family-secondary text-secondary my-1 text-wrap w-full">
          Experienced Full Stack Developer with a strong background in building scalable web
          applications — and the last <strong>Airbender</strong>. I primarily work with React,
          TypeScript, and Node.js, focusing on delivering high-quality, user-friendly solutions.
        </p>
        <span className="text-accent text-[10px] md:text-xs">Gensan, Philippines</span>
        <div className=" mt-2">
          {SocialLinks.map((link, index) => (
            <a
              className="group inline-flex mr-1 w-8 h-8 justify-center items-center ring-[0.5px] ring-accent rounded-md p-0.5 cursor-pointer hover:bg-blue-50"
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex md:justify-center justify-end mt-[3rem] md:mt-0">
        <img
          className="md:w-[100px] md:h-[100px] w-[90px] h-[90px] rounded-full object-cover block "
          src={Profile}
          alt="profile_image"
        />
      </div>
    </section>
  );
};

export default Hero;
