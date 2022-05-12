import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <header>
      {/* <!-- Create a banner across the top --> */}
      <div className="banner">
        {/* <!-- Logo icon --> */}
        <div className="img-box">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            //Fill not working but black looks fine
            fill="#f05133"
            viewBox="0 0 1024.000000 1024.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M5035 9960 c-90 -10 -188 -47 -268 -101 -103 -69 -4337 -4306 -4396
-4398 -64 -100 -93 -204 -93 -331 0 -80 5 -122 22 -175 52 -167 -96 -11 2254
-2363 1637 -1639 2179 -2175 2234 -2212 199 -134 471 -138 673 -9 93 59 4329
4293 4399 4397 134 199 138 471 9 673 -59 93 -4313 4349 -4417 4419 -119 80
-269 116 -417 100z m1710 -1939 c44 -12 118 -40 165 -63 69 -33 102 -59 176
-132 76 -77 98 -106 137 -186 64 -129 81 -200 80 -335 0 -137 -17 -208 -82
-340 -73 -148 -187 -263 -331 -335 -25 -12 -47 -24 -49 -26 -3 -3 -30 -2166
-30 -2459 l0 -160 89 -42 c70 -34 107 -60 178 -128 97 -92 143 -164 181 -285
26 -82 50 -233 44 -285 -24 -248 -33 -278 -122 -415 -82 -125 -182 -223 -273
-264 -164 -76 -306 -96 -428 -61 -30 8 -92 23 -137 32 l-83 17 -31 -30 c-17
-16 -106 -108 -198 -204 l-168 -175 13 -85 c7 -47 13 -129 13 -183 1 -114 -26
-317 -44 -332 -6 -5 -23 -28 -36 -50 -106 -179 -277 -301 -479 -341 -106 -21
-297 -14 -389 15 -100 31 -246 134 -354 250 -135 144 -198 438 -142 655 l23
89 -561 631 c-308 347 -575 645 -593 662 -33 30 -36 31 -156 37 -140 6 -231
32 -333 94 -61 37 -157 111 -164 126 -1 4 -11 16 -20 25 -58 59 -128 190 -161
302 -20 65 -22 91 -18 220 5 163 22 229 92 353 40 73 143 183 217 234 48 34
169 95 169 86 0 -3 6 -1 13 4 6 6 26 14 42 18 17 4 39 9 50 12 11 3 64 7 117
10 160 9 323 -33 448 -115 82 -53 191 -169 236 -248 47 -85 94 -213 94 -260 0
-19 5 -34 10 -34 6 0 10 -38 10 -95 0 -52 -4 -95 -9 -95 -5 0 -12 -21 -16 -47
-8 -58 -57 -184 -91 -236 l-25 -38 28 -37 c15 -20 256 -299 536 -619 l508
-582 51 20 c28 11 58 24 67 28 9 5 79 8 156 6 137 -2 151 -5 295 -51 10 -3 80
59 192 168 l178 173 -31 90 c-68 203 -60 406 22 582 51 108 242 330 325 377
33 19 37 26 39 66 3 49 34 2313 35 2495 l0 110 -57 35 c-74 44 -198 169 -242
244 -64 108 -92 206 -98 347 -7 157 10 246 74 378 38 79 59 108 131 181 128
128 253 195 413 219 87 13 208 6 304 -18z"
              />
            </g>
          </svg>
        </div>
        <h1 className="heading">Full Jack Development</h1>
      </div>
      <nav className="navbar navbar-expand">
        <ul className="navbar-nav">
          <li>
            <Link
              to="/"
              className={
                pathname === "/react-portfolio" || pathname === "/"
                  ? "nav-link selected-link"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={
                window.location.pathname === "/gallery"
                  ? "nav-link selected-link"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link selected-link"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={
                window.location.pathname === "/resume"
                  ? "nav-link selected-link"
                  : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
