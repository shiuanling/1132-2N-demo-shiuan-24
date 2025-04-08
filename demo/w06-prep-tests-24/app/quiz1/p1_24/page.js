import { getCabins } from '@/lib/db-oasis';
import CabinCard_24 from '@/components/demo/oasis_24/CabinCard_24';


export const revalidate = 0;

export default async function P1Page_24() {
  // const cabins = [];
  const cabins =await getCabins();
//   console.log('cabins', JSON.stringify(cabins));

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature`&apos;`s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard_24 cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
