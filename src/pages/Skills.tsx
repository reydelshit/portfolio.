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
    <section className="mt-[2rem] flex h-fit flex-col items-start gap-2 text-start">
      <h1 className="text-md font-bold md:text-2xl">Skills</h1>
      <ul className="flex w-full list-none flex-wrap gap-x-2 gap-y-2">
        {SkillsDetails.map((skill, index) => (
          <li
            key={index}
            className={`font-family-secondary text-xs leading-[20px] ${
              theme === 'dark' ? 'text-main bg-white' : 'bg-neutral-800 text-gray-300'
            } rounded-md px-2 md:text-sm`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
