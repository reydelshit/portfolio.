import { WorkExperiences } from '@/constants/info';

const Experience = () => {
  return (
    <section className="flex gap-2 h-fit items-start flex-col mt-[2rem]">
      <h1 className="font-bold text-md md:text-2xl text-start">Work Experience</h1>

      <div className="flex flex-col gap-2">
        {WorkExperiences.map((experience, index) => (
          <div className="mb-4" key={index}>
            <div className="flex flex-col md:flex-row md:justify-between  md:items-center mb-1 w-full">
              <h1 className="font-bold text-sm md:text-md">
                {experience.title}{' '}
                <span className="bg-[#EEEFF0] text-[#54575E] text-xs inline-block px-2 p-0.5 rounded-sm">
                  {experience.location}
                </span>
              </h1>

              <span className="inline-block text-secondary text-xs md:text-sm">
                {experience.duration}
              </span>
            </div>
            <span className="text-xs md:text-sm text-secondary">
              {experience.company} · {experience.type}
            </span>
            <p className="text-[14px] leading-[20px] font-family-secondary text-secondary my-1">
              {experience.responsibilities}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
