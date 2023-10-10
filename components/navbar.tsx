import { ConnectWallet, useAddress, useDisconnect } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import randomColor from '../util/randomColor';
import { useState } from 'react';

const [randomColor1, randomColor2] = [
    randomColor(),
    randomColor()
];

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    function truncateAddress(address: string) {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <Link href="/">
                <p className={styles.navbarLogo}>Arlandoff`s Portfolio</p>
            </Link>
            <div className={styles.navbarLinks}>
                <Link
                    href={"/"}
                >
                    <p>Home</p>
                </Link>
                <Link
                    href={"/project/erc20"}
                >
                    <p>ERC20</p>
                </Link>
                <Link
                    href={"/project/erc721"}
                >
                    <p>ERC721</p>
                </Link>
                <Link 
                    href={"/project/erc1155"}
                >
                    <p>ERC1155</p>
                </Link>
                <Link
                    href={"/project/profileStatus"}
                >
                    <p>Profile</p>
                </Link>
                <Link
                    href={"/project/tipJar"}
                >
                    <p>Tip</p>
                    
                </Link>
                <Link
                    href={"/project/staking"}
                >
                    <p>Staking</p>
                </Link>
            </div>
            <div>
                {address ? (
                    <>
                        <div
                            className={styles.profilePicture}
                            style={{
                                background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
                            }}
                            onClick={() => {
                                setProfileMenuOpen(!profileMenuOpen);
                            }}
                        />
                        {profileMenuOpen && (
                            <div className={styles.profileMenu}>
                                <p className={styles.profileMenuAddress}>{truncateAddress(address)}</p>
                                <Link 
                                    href={`/profile/${address}`}
                                    onClick={() => {
                                        setProfileMenuOpen(false);
                                    }}
                                >
                                    <p className={styles.profileMenuLink}>Profile</p>
                                </Link>
                                <hr className={styles.divider}/>
                                <button
                                    className={styles.navbarSignOutButton}
                                    onClick={() => {
                                        disconnect();
                                        setProfileMenuOpen(false);
                                    }}
                                >Sign Out</button>
                            </div>
                        )}
                    </>
                ) : (
                    <ConnectWallet 
                        btnTitle='Login'
                        modalTitle='Login'
                    />
                )}
            </div>
        </div>
    );
};