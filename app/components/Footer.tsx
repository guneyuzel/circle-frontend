import { Typography } from "@mui/joy";
import Link from "next/link";

export const Footer = () => (
  <footer className='absolute bottom-0 flex flex-col lg:flex-row w-screen justify-between p-4 lg:items-center gap-y-2'>
    <Typography className='text-neutral-600 text-xs'>
      © 2024 Circle Technology Services, LLC. All rights reserved.
    </Typography>

    <span className='space-x-4 font-semibold'>
      <Link
        href='https://www.circle.com/en/legal/privacy-policy'
        target='_blank'
        className='text-xs no-underline'
      >
        Privacy Policy
      </Link>

      <Link
        href='https://www.circle.com/en/legal/acceptable-use-policy'
        target='_blank'
        className='text-xs no-underline'
      >
        Acceptable Use
      </Link>

      <Link
        href='https://www.circle.com/en/legal/cookie-policy'
        target='_blank'
        className='text-xs no-underline'
      >
        Cookie Policy
      </Link>
    </span>
  </footer>
);
