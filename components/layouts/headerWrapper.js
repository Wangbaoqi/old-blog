export default function HeaderWrapper({ type = "" }) {
  const waveBox = (
    <svg
      className="absolute left-0 right-0 bottom-0 w-full h-8 max-w-full"
      preserveAspectRatio="none"
      width="1440"
      height="74"
      viewBox="0 0 1440 74"
    >
      <path
        fill="var(--bg-primary)"
        d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
      ></path>
    </svg>
  );

  return (
    <div className="bg-header-cover">
      <div
        className={`relative h-64  md:min-h-screen-35 overflow-hidden md:block translate-y-1`}
      >
        {type == "page" ? waveBox : ""}

        <div className="max-w-6xl mx-auto person-logo  w-full relative overflow-hidden">
          {/* <img
            title="nate icon"
            className=" md:block absolute right-2 md:right-11 -bottom-3 md:-bottom-6 h-32 md:h-44 px-2 "
            src={`/assets/svg/me.webp`}
            alt='me icon'
          /> */}
        </div>
      </div>
    </div>
  );
}
