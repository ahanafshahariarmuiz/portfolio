import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function ProductionApplicationCard({
  name,
  logo,
  url,
}: {
  name: string;
  logo: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} — opens in a new tab`}
      className="w-full"
    >
      <div className="w-full py-4 px-3 group flex items-center justify-between transition-all rounded-xl hover:bg-orange-900">
        <div className="flex items-center gap-3">
          <Image src={logo} height={30} width={30} alt={`${name} logo`} />
          <span className="text-lg font-semibold text-orange-950 group-hover:text-orange-50">
            {name}
          </span>
        </div>
        <LuArrowUpRight
          size={20}
          aria-hidden="true"
          className="text-orange-950 group-hover:text-orange-50"
        />
      </div>
    </Link>
  );
}
