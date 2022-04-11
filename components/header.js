import Link from "next/link";

import headNav from "../data/headNav";

import ThemeSwitch from "./themeSwitch";
import SearchIcon from "./searchIcon";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <section className="max-w-screen-xl mx-auto flex justify-between items-center py-5 bg-white dark:bg-primary-bg">
        <Link href="/">
          <div className="flex flex-col justify-start relative z-10 font-medium ob-drop-shadow cursor-pointer">
            <h1 className="text-2xl mr-40">前端不好玩</h1>
            <span className="text-sm">NateWang</span>
          </div>
        </Link>

        <nav className="flex flex-1 justify-between items-center">
          <ul className="flex uppercase text-sm ">
            {headNav.map((el, idx) => {
              return (
                <li key={idx} className='mr-10 text-nav-color dark:text-primary-color'>
                  <Link href={el.href}>{el.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center">
            <ThemeSwitch />
            <SearchIcon/>
          </div>
          
        </nav>
      </section>
    </div>
  );
}
