const Project = ({
  name,
  description,
  githubLink,
  projectLink,
}: {
  name: string;
  description: string;
  projectLink: string;
  githubLink: string;
}) => {
  return (
    <div className='border p-2'>
      <p className='text-xl'>{name}</p>
      <p>{description}</p>
      <a target='_blank' href={githubLink}>
        Code Repo
      </a>
      <a target='_blank' href={projectLink}>
        Project Link
      </a>
    </div>
  );
};

export default Project;
