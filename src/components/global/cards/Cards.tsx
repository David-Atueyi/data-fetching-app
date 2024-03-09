
export const Cards = () => {
  return (
    <div className='border-2 rounded w-[200px] flex flex-col'>
      <div className='h-[160px]'>
        <img src="/images/funnywildlife.jpeg" alt="" className='w-[100%] h-[100%] object-cover rounded'/>
      </div>
      <div className='p-2'>
        <h3 className='uppercase font-bold'>wild life</h3>
        <p>This is a movie about wild life</p>
      </div>
    </div>
  );
}
