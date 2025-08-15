import { EducationDetails } from '@/constants/info';

const Education = () => {
  return (
    <section className="flex gap-2 h-fit items-start flex-col mt-[2rem]">
      <h1 className="font-bold text-md  md:text-2xl text-start">Education</h1>

      <div className="flex flex-col gap-2 w-full">
        {EducationDetails.map((education, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-1 w-full">
              <h1 className="font-bold text-sm md:text-md">{education.degree} </h1>

              <span className="inline-block text-secondary text-xs md:text-sm">
                {education.duration}
              </span>
            </div>
            <p className="text-[14px] leading-[20px] font-family-secondary text-secondary my-1">
              {education.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
