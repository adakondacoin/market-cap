import { defaultFetcherOptions, SupplyFetcher } from "../types"; 
import { getAmountInAddresses, getBlockFrostInstance } from "../utils"; 
 
 const ribby = "e1458b10a6ecd9185cf21b1c6e392fce6f61ad94b37f304a4a3935f552696262794f6e416461"; 
 
 const ribbyFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => { 
const blockFrost = getBlockFrostInstance(options); 
 const total = 69_420_000_000; 
 
const burnRaw = await getAmountInAddresses(blockFrost, ribby, [ 
"1231423534345"]); 
 
 const burn = Number(burnRaw); 
const treasuryRaw = await getAmountInAddresses(blockFrost, ribby, [ 
"122314235345234"]); 
 
 const treasury = Number(treasuryRaw); 
return { 
circulating: (total - treasury- burn).toString(), 
total: (total - burn).toString(), 
}; 
}; 
 
export default ribbyFetcher;