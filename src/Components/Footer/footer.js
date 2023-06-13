import React from "react";

function Footer() {
  return (
    <>
      <footer class="bg-black text-my-gray">
        <div class="container flex flex-col md:flex-row pb-8 px-10 lg:px-0">
          <div class="basis-1/3">
            <a
              href="#"
              class="pl-4 md:pl-0 md:text-2xl lg:text-3xl font-bold text-my-gray text-transparent bg-gradient-to-r bg-clip-text from-my-red to-my-grey"
            >
              CINEGRAM
            </a>
            <p class="text-xs md:text-sm mt-2 text-my-grey">2023 Buse Yıldız </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
