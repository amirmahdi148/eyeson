import {HeroBasic} from "../Shared/HeroBasic.tsx";
import BrandingHeroCard from "./BrandingHeroCard.tsx";



export const BrandingHeroWrapper = () => {
    return (<HeroBasic
        isBranding
        rightComponent={<BrandingHeroCard />}
        BeforeHighlight=""
        Highlight="Branding & Visual Identity"
        AfterHighlight="for Growing Brands"
        enableAnimation={true}
        Description="We build visual identities..."
    />)
}