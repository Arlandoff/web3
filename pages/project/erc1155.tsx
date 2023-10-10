import { MediaRenderer, Web3Button, useActiveClaimCondition, useAddress, useContract,useOwnedNFTs, useContractMetadata, useTotalCirculatingSupply, useTotalCount } from "@thirdweb-dev/react";
import { ERC1155_CONTRACT_ADDRESS } from "../../constants/addresses";
import styles from "../../styles/Home.module.css";
import HeroCard from "../../components/hero-card";

export default function ERC1155Project() {
    const address = useAddress();

    const {
        contract
    } = useContract(ERC1155_CONTRACT_ADDRESS, "edition-drop");

    const { 
        data: contractMetadata,
        isLoading: contractMetadataIsLoading
    } = useContractMetadata(contract);
    
    const {
        data: contractNFTSupply,
        isLoading: contractNFTSupplyIsLoading,
    } = useTotalCount(contract);

    const {
        data: totalCirculatingSupply,
        isLoading: totalCirculatingSupplyIsLoading,

    } = useTotalCirculatingSupply(contract, 0);

    const {
        data: ownedNFTs,
        isLoading: ownedNFTsIsLoading,
    } = useOwnedNFTs(contract, address);

    return (
        <div className={styles.container}>
            <div className={styles.contractPage}>
                <HeroCard
                    isLoading={contractMetadataIsLoading}
                    title={contractMetadata?.name!}
                    description={contractMetadata?.description!}
                    image={contractMetadata?.image!}
                />
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Claim ERC1155</h3>
                        <p>Claim an ERC1155 NFT for 10 ERC20 tokens.</p>
                        <Web3Button
                            contractAddress={ERC1155_CONTRACT_ADDRESS}
                            action={(contract) => contract.erc1155.claim(0, 1)}
                        >Claim NFT</Web3Button>

                    </div>
                    <div className={styles.card}>
                        <h3>Contract Stats</h3>
                        <p>
                            Total NFTs: 
                            {contractNFTSupplyIsLoading ? "Loading..." :  `${contractNFTSupply?.toNumber()}`}
                        </p>
                        <p>
                            Total Circulating Supply Token ID 0:
                            {totalCirculatingSupplyIsLoading ? "Loading..." :  `${totalCirculatingSupply?.toNumber()}`}
                        </p>

                    </div>
                    <div className={styles.card}>
                        <h3>Your NFTs</h3>
                        {ownedNFTsIsLoading ? "Loading..." : (
                            ownedNFTs?.map((nft) => (
                                <p key={nft.metadata.id}>TokenID#{nft.metadata.id} Owned: {nft.quantityOwned}</p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};