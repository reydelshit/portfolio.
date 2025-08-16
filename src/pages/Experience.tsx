import { WorkExperiences } from '@/constants/info';

const Experience = () => {
  return (
    <section className="mt-[2rem] flex h-fit flex-col items-start gap-2">
      <div className="flex w-full justify-between">
        <h1 className="text-md text-start font-bold md:text-2xl">Work Experience</h1>

        <a target="_blank" href="/resume.pdf" className="text-secondary cursor-pointer text-xs underline md:text-sm">
          view resume🔗
        </a>
      </div>

      <div className="flex flex-col gap-2">
        {WorkExperiences.map((experience, index) => (
          <div className="mb-4" key={index}>
            <div className="mb-1 flex w-full flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="md:text-md text-sm font-bold">
                {experience.title}{' '}
                <span className="inline-block rounded-sm bg-[#EEEFF0] p-0.5 px-2 text-xs text-[#54575E]">
                  {experience.location}
                </span>
              </h1>

              <span className="text-secondary inline-block text-xs md:text-sm">{experience.duration}</span>
            </div>
            <span className="text-secondary text-xs md:text-sm">
              {experience.company} · {experience.type}
            </span>
            <p className="font-family-secondary text-secondary my-1 text-[14px] leading-[20px]">
              {experience.responsibilities}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
