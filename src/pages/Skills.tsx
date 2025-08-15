const SkillsDetails = [
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'MySQL',
  'Sequelize',
  'Prisma ORM',
  'Git',
  'CI/CD',
];

const Skills = ({ theme }: { theme: string }) => {
  return (
    <section className="flex gap-2 h-fit mt-[2rem] flex-col text-start items-start">
      <h1 className="font-bold md:text-2xl text-md">Skills</h1>
      <ul className="list-none flex flex-wrap gap-x-2 gap-y-2 w-full">
        {SkillsDetails.map((skill, index) => (
          <li
            key={index}
            className={`text-xs leading-[20px] font-family-secondary  ${
              theme === 'dark' ? 'bg-white text-main' : 'bg-neutral-800 text-gray-300'
            } px-2 rounded-md md:text-sm  font-semibold`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
