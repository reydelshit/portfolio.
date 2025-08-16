import { EducationDetails } from '@/constants/info';

const Education = () => {
  return (
    <section className="mt-[2rem] flex h-fit flex-col items-start gap-2">
      <h1 className="text-md text-start font-bold md:text-2xl">Education</h1>

      <div className="flex w-full flex-col gap-2">
        {EducationDetails.map((education, index) => (
          <div key={index}>
            <div className="mb-1 flex w-full flex-col justify-between md:flex-row md:items-center">
              <h1 className="md:text-md text-sm font-bold">{education.degree} </h1>

              <span className="text-secondary inline-block text-xs md:text-sm">{education.duration}</span>
            </div>
            <p className="font-family-secondary text-secondary my-1 text-[14px] leading-[20px]">
              {education.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
