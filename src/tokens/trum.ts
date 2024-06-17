import { defaultFetcherOptions, SupplyFetcher } from "../types"; 
import { getAmountInAddresses, getBlockFrostInstance } from "../utils"; 
 
 const trum = "fb0da6de717a0a0e2c905d6288a2d61a65253b65ab04cd863a69677361736466617364667364667364"; 
 
 const trumFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => { 
const blockFrost = getBlockFrostInstance(options); 
 const total = 1_000_000_000; 
 
const burnRaw = await getAmountInAddresses(blockFrost, trum, [ 
"dfghfghfghdfgh"]); 
 
 const burn = Number(burnRaw); 
const treasuryRaw = await getAmountInAddresses(blockFrost, trum, [ 
"dfghdfghdfghtyjtfyj"]); 
 
 const treasury = Number(treasuryRaw); 
return { 
circulating: (total - treasury- burn).toString(), 
total: (total - burn).toString(), 
}; 
}; 
 
export default trumFetcher;