const Project = ({
  name,
  description,
  githubLink,
  projectLink,
  stack,
}: {
  name: string;
  description: string;
  projectLink: string;
  githubLink: string;
  stack?: string[];
}) => {
  return (
    <div className='border p-2 md:w-[50vw] flex flex-col gap-2'>
      <p className='text-xl'>{name}</p>
      <p>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {stack?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className='flex gap-5 justify-end text-blue-800'>
        {githubLink ? (
          <a target='_blank' href={githubLink}>
            Repo
          </a>
        ) : null}
        {projectLink ? (
          <a target='_blank' href={projectLink}>
            Link
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
