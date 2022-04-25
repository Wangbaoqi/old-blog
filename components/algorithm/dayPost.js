
import { Avatar } from '@components/ui';
import Link from 'next/link';

import { RecomendWrapper, FeatureCard } from '@components/posts';
import { Title } from '@components/ui';

import { Star } from 'react-feather';

const DayTablePost = ({
  dayList = []
}) => {
  console.log(dayList, 'dayList');

  return (
    <section className='my-20'>
      
      <Title title='Every Day' />

      <div className='inline-block min-w-full shadow-3xl rounded-lg overflow-hidden mt-10'>
        <div>bar</div>
        <table className=' min-w-full leading-normal bg-card-cover'>
          <thead>
            <tr>
              <th className='px-5 py-5 font-advent text-lg text-left'>num</th>
              <th className='px-5 py-5 font-advent text-lg text-left'>topic</th>
              <th className='px-5 py-5 font-advent text-lg text-left'>tags</th>
              <th className='px-5 py-5 font-advent text-lg text-left'>level</th>
              <th className='px-5 py-5 font-advent text-lg text-left'>date</th>
              <th className='px-5 py-5 font-advent text-lg text-left'>hot</th>
              {/* <th className='px-5 py-5 font-advent text-lg text-left'>components</th> */}
              <th className='px-5 py-5 font-advent text-lg text-left'>author</th>
            </tr>
          </thead>
          <tbody>
            {
              dayList.map((item) => (
                <tr key={item.id}>
                  <td className='px-5 py-5 '>{ item.id }</td>
                  <td className='px-5 py-5 '>
                    <Link href={`/posts/${item.slug}`} >
                      <span className=' cursor-pointer hover:text-hover-color'>{ item.title }</span>
                    </Link>
                  </td>
                  <td className='px-5 py-5 '>
                    {
                      item.tags.map((tag, idx) => (
                        <em key={idx} className=''>{ tag }</em>
                      ))
                    }
                  </td>
                  <td className='px-5 py-5 '>{ item.level }</td>
                  <td className='px-5 py-5 '>
                    <span>
                      {item.date}
                    </span>
                  </td>
                  <td className='px-5 py-5 '>
                    <div className='flex items-center'>
                      {
                        Array(item.hot).fill('').map((s, idx) => (
                          <Star key={idx} size={16}/>
                        ))
                      }
                    </div>
                  </td>
                  <td className='px-5 py-5'>
                    <div>
                      <Avatar {...item.author} />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>pagenation</div>
      </div>

    </section>
  )
}


export default DayTablePost