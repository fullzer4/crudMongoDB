import Styles from "@/scss/Navbar.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const deslogar = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    router.push('/');
  }

  return(
    <div className={Styles.navbar}>
      <Link href="/Dashboard" className={Styles.Dashboard}>Dashboard</Link>
      <button className={Styles.Sair} onClick={() => deslogar()}> Sair </button>
    </div>
  )
}