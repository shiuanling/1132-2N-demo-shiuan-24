import aboutSvg from '../assets/about.svg';
import SectionTitle_xx from './SectionTitle_xx';

const About_xx = () => {
  return(
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='' />
      <article>
        <SectionTitle_xx text='code and coffee'/>
        <p className='text-slate-600 mt-8 leading-loose '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem distinctio in eius nisi modi possimus quam. Nam sit vero nobis, reprehenderit aut dolores repellat, perferendis neque, vel quidem eos quia iste enim! Facilis excepturi eveniet soluta vel blanditiis quos corporis. Quisquam sed veniam laboriosam nemo rem velit unde deserunt!</p>
      </article>
      </div>
    </section>
  );
};
export default About_xx;
