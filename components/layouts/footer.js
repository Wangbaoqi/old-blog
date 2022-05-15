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
        <div className="max-w-6xl mx-auto py-8 flex mt-20 lg:px-5  flex-col md:flex-row justify-between space-y-8 lg:flex-row lg:space-y-0">
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
            <div className="space-y-3  ml-24">
              <div className="capitalize font-SourceCode text-primary-color opacity-80 text-sm">
                Social media
              </div>
              <div className="flex gap-2">
                <Link href='https://twitter.com/baoqi_wang' className='cursor-pointer'>
                  <Twitter size={20}/>
                </Link>
                <Link href='mailto:wangbaoqi8839@gmail.com' className='cursor-pointer'>
                  <Mail size={20}/>
                </Link>
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
