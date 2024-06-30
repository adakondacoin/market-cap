import { defaultFetcherOptions, SupplyFetcher } from "../types"; 
import { getAmountInAddresses, getBlockFrostInstance } from "../utils"; 
 
 const zanna = "4dcb75126cf3f75d41bd7c1d16657bfc5baac06969e7cfba6b8788565265616c5a616e6e61436f696e"; 
 
 const zannaFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => { 
const blockFrost = getBlockFrostInstance(options); 
 const total = 1_000_000_000; 
 
const burnRaw = await getAmountInAddresses(blockFrost, zanna, [ 
"asdfasdfasdfasdf", 
"asdfasdfasdf"]); 
 
 const burn = Number(burnRaw); 
const treasuryRaw = await getAmountInAddresses(blockFrost, zanna, [ 
"asdfasdfasdfasdfaa", 
"asdfasdfasdf"]); 
 
 const treasury = Number(treasuryRaw); 
return { 
circulating: (total - treasury- burn).toString(), 
total: (total - burn).toString(), 
}; 
}; 
 
export default zannaFetcher;