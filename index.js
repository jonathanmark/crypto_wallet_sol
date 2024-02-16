const {
  Connection,
  PublicKey,
  clusterApiUrl,
  KeyPair,
  LAMPORTS_PER_SOL,
  Keypair,
} = require("@solana/web3.js");

//A public key allows other people to send crypto to you
//A secret key allows you to send crypto to other people
//A wallet holds a secret key and a public key

const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const walletBalance = await connection.getBalance(publicKey);
    console.log(walletBalance);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  await getWalletBalance();
};

main();
