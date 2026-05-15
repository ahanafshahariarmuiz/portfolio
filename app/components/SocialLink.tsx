import Link from "next/link";
import { IconType } from "react-icons";

export default function SocialLink({
  Icon,
  url,
  label,
}: {
  Icon: IconType;
  url: string;
  label: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 max-lg:w-10 max-lg:h-10 grid place-content-center group rounded-full bg-orange-50 hover:bg-orange-200 duration-150"
    >
      <Icon
        aria-hidden="true"
        className="group-hover:scale-120 duration-150 text-orange-950 size-6 max-lg:size-5"
      />
    </Link>
  );
}
