import Link from "next/link"
import { ChevronLeft } from "../Icons/Icons"

const Breadcrump = () => {
  return (
    <ul className="flex items-center gap-4">
        <li className="flex items-center gap-4">
            <Link href="/" className="text-black text-14">صفحه اصلی</Link>
            <ChevronLeft size="16"/>
        </li>
        <li className="flex items-center gap-4">
            <Link href="/" className="text-black text-14">لیست درخواست ها</Link>
            <ChevronLeft size="16"/>
        </li>
        <li className="flex items-center gap-4">
            <Link href="/" className="text-black text-14">صفحه اصلی</Link>
        </li>
    </ul>
  )
}

export default Breadcrump