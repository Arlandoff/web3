import styles from "../styles/Home.module.css";
import { ThirdwebNftMedia, MediaRenderer, Web3Button, useContract, useNFT } from "@thirdweb-dev/react";
import { ERC721_CONTRACT_ADDRESS, STAKING_CONTRACT_ADDRESS } from "../constants/addresses";

type Props = {
    tokenId: number;
};

export default function StakedNFTCard({ tokenId }: Props) {
    const {
        contract: ERC721Contract
    } = useContract(ERC721_CONTRACT_ADDRESS, "signature-drop");

    const {
        contract: stakingContract
    } = useContract(STAKING_CONTRACT_ADDRESS);


    const {
        data: nftMetadata,
        isLoading: nftMetadataIsLoading
    } = useNFT(ERC721Contract, tokenId);

    return (
        <div className={styles.stakeNftContainer}>
            <div className={styles.card}>
                {nftMetadata ? (
                    <>
                        <ThirdwebNftMedia
                            metadata={nftMetadata?.metadata}
                            width="100%"
                            height="auto"
                        />
                        <div className={styles.nftInfoContainer}>
                            <p className={styles.nftName}>{nftMetadata?.metadata?.name}</p>
                            <p className={styles.nftTokenId}>TokenID: #{nftMetadata?.metadata?.id}</p>
                        </div>
                        <Web3Button
                            contractAddress={STAKING_CONTRACT_ADDRESS}
                            action={(contract) => contract.call("withdraw", [[tokenId]])}
                            style={{ width: "100%" }}
                        >
                            Unstake
                        </Web3Button>
                    </>
                ) : (
                    <p>Loading NFT data...</p>
                )}       
            </div>
        </div>
    )
                }
                    