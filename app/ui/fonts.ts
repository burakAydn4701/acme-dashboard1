import {Inter, Lusitana} from "next/font/google"
import {subset} from "semver";

export const inter = Inter({subsets: ["latin"]})
export const lusitana = Inter({subsets: ["latin"], weight: ["400", "700"]})