import * as React from "react";

export function List({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10">
      <path
        d="M 1.496 2.068 C 2.046 2.068 2.498 1.618 2.498 1.066 C 2.496 0.513 2.049 0.064 1.496 0.06 C 0.943 0.064 0.496 0.513 0.494 1.066 C 0.494 1.617 0.945 2.068 1.496 2.068 Z M 4.549 1.793 L 12.418 1.793 C 12.611 1.794 12.797 1.718 12.933 1.581 C 13.07 1.445 13.146 1.259 13.145 1.066 C 13.147 0.873 13.071 0.687 12.934 0.55 C 12.797 0.414 12.611 0.338 12.418 0.34 L 4.548 0.34 C 4.355 0.338 4.169 0.414 4.033 0.551 C 3.896 0.687 3.82 0.873 3.822 1.066 C 3.82 1.259 3.896 1.445 4.033 1.582 C 4.17 1.719 4.356 1.795 4.549 1.793 Z M 1.496 5.777 C 2.046 5.777 2.498 5.327 2.498 4.775 C 2.498 4.225 2.047 3.773 1.496 3.773 C 0.946 3.773 0.494 4.225 0.494 4.775 C 0.494 5.326 0.945 5.777 1.496 5.777 Z M 4.549 5.502 L 12.418 5.502 C 12.611 5.504 12.798 5.428 12.934 5.291 C 13.071 5.155 13.147 4.968 13.145 4.775 C 13.147 4.582 13.071 4.396 12.934 4.259 C 12.797 4.123 12.611 4.047 12.418 4.049 L 4.548 4.049 C 4.355 4.047 4.169 4.123 4.033 4.26 C 3.896 4.396 3.82 4.582 3.822 4.775 C 3.82 4.968 3.896 5.154 4.033 5.291 C 4.17 5.428 4.356 5.504 4.549 5.502 Z M 1.496 9.492 C 2.046 9.492 2.498 9.041 2.498 8.49 C 2.497 7.936 2.05 7.486 1.496 7.482 C 0.942 7.486 0.495 7.936 0.494 8.49 C 0.494 9.041 0.945 9.492 1.496 9.492 Z M 4.549 9.217 L 12.418 9.217 C 12.611 9.218 12.797 9.142 12.933 9.005 C 13.07 8.869 13.146 8.683 13.145 8.49 C 13.147 8.297 13.071 8.111 12.934 7.974 C 12.797 7.838 12.611 7.762 12.418 7.764 L 4.548 7.764 C 4.355 7.762 4.169 7.838 4.033 7.975 C 3.896 8.111 3.82 8.297 3.822 8.49 C 3.82 8.683 3.896 8.869 4.033 9.006 C 4.17 9.143 4.356 9.219 4.549 9.217 Z"
        fill={color}
      ></path>
    </svg>
  );
}
