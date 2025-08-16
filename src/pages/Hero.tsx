import Profile from '@/assets/ang.jpg';
import AnggDark from '@/assets/angg.jpg';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { TiSocialLinkedin } from 'react-icons/ti';

const SocialLinks = [
  {
    platform: 'Email',
    url: 'mailto:reydelocon.dev@gmail.com?subject=hello&body=reydel!',
    icon: <MdOutlineMail className="text-secondary group-hover:text-main inline-flex text-xl" />,
  },

  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/reydelshit/',
    icon: <FaInstagram className="text-secondary group-hover:text-main inline-flex text-xl" />,
  },

  {
    platform: 'GitHub',
    url: 'https://github.com/reydelshit',
    icon: <IoLogoGithub className="text-secondary group-hover:text-main inline-flex text-xl" />,
  },

  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reydel-ocon/',
    icon: <TiSocialLinkedin className="text-secondary group-hover:text-main text-xl" />,
  },
];
const Hero = ({ theme }: { theme: string }) => {
  return (
    <section className="flex h-fit items-start justify-between md:items-center md:gap-2">
      <div className="w-[80%]">
        <h1 className="text-lg font-bold md:text-3xl">Reydel Ocon</h1>
        <p className="font-family-secondary text-secondary my-1 w-full text-xs leading-[20px] text-wrap md:text-sm">
          Experienced Full Stack Developer with a strong background in building scalable web applications — and the last{' '}
          <strong>Airbender</strong>. I primarily work with React, TypeScript, and Node.js, focusing on delivering
          high-quality, user-friendly solutions.
        </p>
        <span className="text-accent text-[10px] md:text-xs">Gensan, Philippines</span>
        <div className="mt-2">
          {SocialLinks.map((link, index) => (
            <a
              className="group ring-accent mr-1 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-0.5 ring-[0.5px] hover:bg-blue-50"
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

      <div className="mt-[3rem] flex justify-end md:mt-0 md:justify-center">
        {theme === 'light' ? (
          <img
            className="block h-[90px] w-[90px] rounded-full object-cover md:h-[100px] md:w-[100px]"
            src={Profile}
            alt="profile_image"
          />
        ) : (
          <img
            className="block h-[90px] w-[90px] rounded-full object-cover md:h-[100px] md:w-[100px]"
            src={AnggDark}
            alt="profile_image"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
