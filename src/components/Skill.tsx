const Skill = ({ name }: { name: string }) => {
  return (
    <span className='duration-700 cursor-default hover:font-bold hover:text-lg hover:text-blue-800'>
      {name}
    </span>
  );
};

export default Skill;
