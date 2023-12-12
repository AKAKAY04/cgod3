import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "推特",
      linkText: "CryptoGod",
      link: "https://twitter.com/CryptoGodJeus",
    },
    {
      title: "开发者",
      linkText: "@AKAKAY",
      link: "https://twitter.com/AKAKAY04",
    },
    {
      title: "Founder",
      linkText: "@Jack007",
      link: "https://twitter.com/ChaunceyCrypto",
    },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2 text-xl"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
        
      </div>
    </div>
  );
}
