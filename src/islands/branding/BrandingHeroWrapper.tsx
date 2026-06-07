import {HeroBasic} from "../Shared/HeroBasic.tsx";
import BrandingHeroCard from "./BrandingHeroCard.tsx";



export const BrandingHeroWrapper = () => {
    return (<HeroBasic
        isBranding
        rightComponent={<BrandingHeroCard />}
        BeforeHighlight=""
        Highlight="Branding & Visual Identity for Brands"


        Description="Build a brand people recognize, remember, and trust.
From logos and visual systems to complete brand identities, we create distinctive brands
that communicate clearly, stand out in competitive markets, and remain consistent across
every touchpoint."
        primaryBtnText="View Our Work"
        secondaryBtnText="Get Pricing"
    />)
}