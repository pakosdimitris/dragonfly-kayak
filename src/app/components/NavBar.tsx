import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="h-11">
      <div className="flex-wrap flex flex-row justify-around h-full content-center">
        <div>
          <h2>Dragonfly Kayak</h2>
        </div>
        <div>
          <ul>
            <a href="" className="px-2">
              home
            </a>
            <a href="" className="px-2">
              tours
            </a>
            <a href="" className="px-2">
              contact
            </a>
            <a href="" className="px-2">
              gallery
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
