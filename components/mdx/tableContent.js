import { useState, useEffect } from "react";
import cn from "classnames";


const useActiveId = idList => {
  const [activeId, setActiveId] = useState('el')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        })
      },
      { rootMargin: '0px 0% -80% 0%' }
    )
    idList.forEach((id) => {
      observer.observe(document.getElementById(id));
    });

    return () => {
      idList.forEach((id) => {
        const idNode = document.getElementById(id)
        idNode && observer.unobserve(idNode);
      });
    }
  }, [idList]);
  return activeId
}

export default function TableContent({
  toc,
  indexDepth = 2
}) {
  const tocIds = toc.map(e => e.url.replace(/#/g, ''))
  const activeId = useActiveId(tocIds)
  return (
    <>
      <nav className="sticky top-28">
        <h2 className="text-base mb-6">TABLE OF CONTENT</h2>
        <ul>
          {
            toc.map(head => {
              const headCls = cn(
                'text-pre', 'hover:text-hover-color',
                {
                  'pl-2': head.depth > indexDepth,
                  'text-hover-color': head.url === `#${activeId}`
                }
              )
              return (
                <li key={head.value} className='mt-2'>
                  <a href={head.url} className={headCls}>{ head.value }</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )

}