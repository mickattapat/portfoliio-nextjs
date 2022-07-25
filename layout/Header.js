import Link from "next/link"
import { useRouter } from "next/router";

function Header() {
  const path = [
    {
      name: "Attapat.ka",
      path: "/",
    },
    {
      name: "About Me",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
  ]

  const router = useRouter();

  const routPath = path.map((rout, index) => {
    return (
      <li
        key={index}
        className={router.pathname == rout.path ? "app-header-item-active" : ""}
      >
        <Link href={rout.path}>{rout.name}</Link>
      </li>
    )
  })

  return (
    <header className="header_detail">
      <ul>{routPath}</ul>
    </header>
  )
}

export default Header
