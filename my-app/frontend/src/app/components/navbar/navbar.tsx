import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <Image src="" alt="Logo" width={100} height={100} />
                </div>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Work</Link></li>
                    <li><Link href="/Connect">Connect</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
