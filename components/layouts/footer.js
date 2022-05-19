import { Container } from "@components/layouts";
import dayjs from "dayjs";
import { Logo } from "@components/ui";
import useSWR from "swr";
import fetcher from "@lib/fetcher";
import Link from "next/link";
import { Eye, Twitter, Mail } from "react-feather";
import { cateNav } from "@data/headNav";
export default function Footer() {
  const date = dayjs().format("YYYY");

  const { data = {}, error } = useSWR("/api/visitor", fetcher);

  return (
    <footer className="bg-header-cover">
      <Container>
        <div className="max-w-6xl mx-auto py-8 flex mt-40 lg:px-5 px-3 flex-col md:flex-row justify-between space-y-8 lg:flex-row lg:space-y-0">
          <div className=" flex flex-col justify-between">
            <div className="h-full flex flex-col">
              <Logo />
              <span className="mt-1 text-pre font-SourceCode">Thanks for reading!</span>
            </div>
            <div className="text-xs text-primary-color opacity-80 hidden md:block">
              © {date}-present NateWang. All Rights Reserved.
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm sm:grid-cols-2">
            <div className="space-y-3 ">
              <h3 className="capitalize text-primary-color font-SourceCode opacity-80">Category</h3>
              <ul className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2 font-Sriracha">
                {
                  cateNav.map((ca, id) => (
                    <li key={id} className='mt-1'>
                      <Link href={ca.href}>
                        {ca.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="space-y-3 ml-14 md:ml-24">
              <div className="capitalize font-SourceCode text-primary-color opacity-80 text-sm">
                Social media
              </div>
              <div className="flex gap-2">
                <a href='https://twitter.com/baoqi_wang' target='_blank'>
                  <Twitter size={20} className='cursor-pointer'/>
                </a>
                <a href='mailto:wangbaoqi8839@gmail.com' target='_blank'>
                  <Mail size={20} className='cursor-pointer'/>
                </a>
                <a href='https://leetcode.cn/u/nate-wang/' target='_blank'>
                  <svg className='cursor-pointer' width="22" height="18" viewBox="0 0 24 24" fill="var(--fg-primary)" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" role="img" xmlns="http://www.w3.org/2000/svg"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/></svg>
                </a>
              </div>

              <div className="capitalize text-primary-color opacity-80 font-SourceCode pt-5 text-sm">visitors</div>
              <div className="flex items-center">
                <Eye size={18} />
                <span className="ml-2">{ data.total || 1}</span>
              </div>
            </div>
          </div>
          <div className="text-xs block md:hidden">
            © {date}-present NateWang. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
