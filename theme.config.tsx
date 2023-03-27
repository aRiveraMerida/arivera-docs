import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta
        name="google-site-verification"
        content="znqL_OsBnLSWCaL3_C4ff5ltmGiqBGFlXi7UtMIIUqw"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "aRivera - Docs",
      defaultTitle: "aRivera Documentation",
      description:
        "La documentación aRivera cubre temas como HTML, CSS, JavaScript, frameworks y herramientas populares para el desarrollo web. Está diseñada para ser fácil de entender y seguir, lo que la convierte en una excelente opción tanto para principiantes como para desarrolladores web experimentados.",
      canonical: "https://starwars-databank.vercel.app/",
      openGraph: {
        images: [
          {
            url: "/images/preview.png",
            width: 800,
            height: 420,
            alt: "aRivera Preview",
          },
        ],
      },
    };
  },
  project: {
    link: "https://github.com/lethamburn/starwars-databank-docs",
    icon: (
      <Image
        src="/images/thunder.png"
        alt="Thunder icon"
        width={35}
        height={35}
        priority
      />
    ),
  },
  logo: (
    <>
      <Image
        src="/images/logo.png"
        alt="aRivera logo"
        width={24}
        height={24}
        priority
      />
      <span style={{ marginLeft: ".5em", fontWeight: 800 }}>
        aRivera Docs
      </span>
    </>
  ),
  primaryHue: 193,
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/aRiveraMerida" target="_blank">
        aRiveraMerida
        </a>
      </span>
    ),
  },
};

export default config;
