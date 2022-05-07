import Link from "next/link";

import { Link as LinkIcon } from 'react-feather';

const Table = ({
  head = [],
  body = []
}) => {

  return (
    <table className="table-auto min-w-full leading-normal bg-card-cover rounded-lg my-8">
      <thead>
        <tr>
          {
            head.map((h, id) => (
              <td className="px-4 py-2 font-Sriracha text-base text-left" key={id}>{ h }</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          body.map((b, id) => (
            <tr key={id} className=' text-sm'>
              {
                b.map((t, idx) => (
                  <td className="px-5 py-4 " key={idx}>{t}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table


