import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex max-h-fit min-w-[250px] max-w-full items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 p-3">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/mhusniim__/"
        data-instgrm-version="14"
        style={{
          maxWidth: "540px",
          width: "calc(100% - 20px)",
          margin: "auto",
          padding: 0,
        }}
      ></blockquote>
    </div>
  );
}
