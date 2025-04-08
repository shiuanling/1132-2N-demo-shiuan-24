const SkillsCard_xx = ({ title, text, icon }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <div className='capitalize p-8 tracking-wide font-medium'>
        {icon}
        <h2 className='text-xl'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
      </div>
    </article>
  );
};

export default SkillsCard_xx;