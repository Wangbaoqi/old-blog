import Link from "next/link";
import headNav from "@data/headNav";
import ThemeSwitch from "./themeSwitch";
import { useRouter } from "next/router";
import { Logo, GithubIcon, SearchBtn } from '@components/ui';

export default function Header() {
  const { pathname = '/' } = useRouter()

  const activeSvg = (
    <svg width="30" height="8" viewBox="0 0 37 8" fill="none"
      className=" absolute -bottom-2 left-0 right-0 m-auto">
      <path
        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
        stroke="hsl(53deg, 100%, 50%)"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      </path>
    </svg>
  )
  return (
    <div className="fixed left-0 right-0 top-0 backdrop-blur md:py-3 z-1000">
      <section className="flex justify-between items-center max-w-6xl mx-auto md:py-8 md:px-6 lg:py-2 lg:px-5 px-4 py-5">
        <div className="flex items-center">
          {/* <MobileNav /> */}
          <Link href="/">
            <div className="flex flex-col justify-start relative z-10 font-medium ob-drop-shadow cursor-pointer">
              <Logo/>
            </div>
          </Link>

          <ul className="hidden lg:flex text-sm ml-10 font-Gloria text-black dark:text-white">
            {headNav.map((el, idx) => {
              return (
                <li key={idx} className='mr-10 relative'>
                  <Link href={el.href}>{el.title}</Link>
                  {
                    el.href == pathname ? activeSvg : ''
                  }
                </li>
              );
            })}
          </ul>
        </div>

        <nav className="flex justify-between items-center ">
          <div className="flex items-center">
            <SearchBtn />
            <ThemeSwitch />
            <GithubIcon />
          </div>
        </nav>
      </section>
    </div>
  );
}
