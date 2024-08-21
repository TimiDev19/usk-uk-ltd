import Mesoestetic from '../assets/mesoestetic_blemiderm_pack_0001.webp'
import Ejal from '../assets/ejal_sunscreen_face_spf50_30ml.webp'
import Clinisoothe from '../assets/clinisoothe_100ml.webp'
import BCN from '../assets/bcn_meso_body_roller_0002.webp'
import Mesoestetic_mpen from '../assets/mesoestetic_mpen_0004_1.webp'
import Surface_Paris_Mesoroller from '../assets/surface_paris_mesoroller_0002.webp'
import Thermage_Body_Frame from '../assets/thermage_body_tip_16.0_0003.webp'

import AesPlla from '../assets/aesplla_dermal_filler_0001.webp'
import Aquashine from '../assets/aquashine_ptx_0004.webp'
import Aquashine_Soft from '../assets/aquashine_soft_filler_0004.webp'
import Desirial from '../assets/desirial_0004.webp'
import DesirialPlus from '../assets/desirial_plus_0004.webp'
import HArmonyCa from '../assets/harmonyca_with_lidocaine_0002.webp'
import Karisma from '../assets/karisma_0004 (1).webp'
import Newgyn from '../assets/newgyn_0001.webp'
import Perfectha from '../assets/perfectha_deep_0004.webp'
import Prostrolane from '../assets/prostrolane_blanc_b_2x2ml_0001.webp'
import Alidya from '../assets/alidya_0001.webp'
import Dermaheal from '../assets/untitled_design_3__6_3_1.webp'
import Dermaheal_HL from '../assets/dermaheal_hl_03_1.webp'
import FILLMED from '../assets/fillmed_nctf_135ha_0007_1.webp'
import Juvederm from '../assets/juvederm_volite_0003.webp'
import Neauvia from '../assets/neauvia_organic_hydro_deluxe_0001.webp'
import Neauvia_Organic from '../assets/neauvia_organic_hydro_deluxe_man_0006_1.webp'
import Profhilo from '../assets/profhilo_body_kit_0004.webp'
import Profhilo_H from '../assets/profhilo_h_l_0004_1_1.webp'
import Saypha from '../assets/saypha_rich_0001.webp'
import TKN from '../assets/tkn_ha_3_1.webp'
import Aqualyx from '../assets/aqualyx_0004.webp'

const products = {
    "items": [

        {
            image: Ejal,
            name: "Ejal Sunscreen Face SPF50+ (1 x 30ml)",
            price: "£33.00",
            type: "bestSeller",
            category: "cosmetics",
        },
        
        {
            image: Clinisoothe,
            name: "Clinisoothe+ Skin Purifier (1 x 100ml)",
            price: "£13.50",
            type: "bestSeller",
            category: "cosmetics",
        },
        {
            image: BCN,
            name: "BCN Tech Meso Body Roller (1 x 1.0mm)",
            price: "£12.50",
            type: "featured",
            category: "accessories",
        },

        {
            image: Surface_Paris_Mesoroller,
            name: "Surface Paris Mesoroller (1 x 0.3mm)",
            price: "£15.50",
            type: "featured",
            category: "accessories",
        },
        {
            image: Thermage_Body_Frame,
            name: "Thermage Body Frame Tip 16.0cm2 (1 x 500 REP) - Clearance",
            price: "£267.00",
            type: "featured",
            category: "cosmetics",
        },


        // Dermal Fillers
        {
            image: AesPlla,
            name: "AesPlla (1 x 365mg)",
            price: "£99.00",
            bestSeller: "no",
            featured: "yes",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Aquashine,
            name: "Aquashine PTX (2 x 2ml)",
            price: "£64.50",
            bestSeller: "no",
            featured: "yes",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Aquashine_Soft,
            name: "Aquashine Soft Filler (2 x 2ml)",
            price: "£59.00",
            bestSeller: "yes",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Desirial,
            name: "Desirial (1 x 1ml)",
            price: "£56.50",
            bestSeller: "no",
            featured: "yes",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: DesirialPlus,
            name: "Desirial Plus (2 x 2ml)",
            price: "£233.00",
            bestSeller: "no",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: HArmonyCa,
            name: "HArmonyCa with Lidocaine (2 x 1.25ml)",
            price: "£232.00",
            bestSeller: "yes",
            featured: "yes",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Karisma,
            name: "Karisma Rh Collagen FACE (1 x 2ml)",
            price: "£79.00",
            bestSeller: "yes",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Mesoestetic,
            name: "Mesoestetic Blemiderm Pack (1 Kit)",
            price: "£125.00",
            bestSeller: "yes",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Mesoestetic_mpen,
            name: "Mesoestetic m.pen [pro] Ultimate Microneedling Device (1 Depth)",
            price: "£299.00",
            bestSeller: "no",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Newgyn,
            name: "Newgyn (1 x 2ml)",
            price: "£84.50",
            bestSeller: "no",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Perfectha,
            name: "Perfectha Deep (1 x 1ml)",
            price: "£39.00",
            bestSeller: "no",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },
        {
            image: Prostrolane,
            name: "Prostrolane Blanc-B (2 x 2ml)",
            price: "£68.00",
            bestSeller: "no",
            featured: "no",
            category: "dermal-fillers",
            type: "cosmetics"
        },



        // mesotherapy
        {
            image: Alidya,
            name: "Alidya Anti LipoDystrophic Agents (5 x 340mg + 5 x 10ml)",
            price: "£57.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Dermaheal,
            name: "Dermaheal Dark Circle Solution (5 x 1.5ml)",
            price: "£53.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Dermaheal_HL,
            name: "Dermaheal HL (10 x 5ml)",
            price: "£53.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: FILLMED,
            name: "FILLMED NCTF 135HA (5 x 3ml)",
            price: "£126.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Juvederm,
            name: "Juvederm Volite (2 x 1ml)",
            price: "£153.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Neauvia,
            name: "Neauvia Organic Hydro Deluxe (2 x 2.5ml)",
            price: "£48.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Neauvia_Organic,
            name: "Neauvia Organic Hydro Deluxe Man (2 x 1ml) - Special Offer",
            price: "£48.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Profhilo,
            name: "Profhilo Body Kit (1 Kit)",
            price: "£153.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Profhilo_H,
            name: "Profhilo H+L (1 x 2ml)",
            price: "£76.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Saypha,
            name: "Saypha Rich (1 x 1ml)",
            price: "£28.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: TKN,
            name: "TKN HA 3 (1 x 1.6ml) - Special Offer",
            price: "£48.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        {
            image: Aqualyx,
            name: "Aqualyx (10 x 8ml)",
            price: "£139.00",
            bestSeller: "no",
            featured: "no",
            category: "mesotherapy",
            type: "cosmetics"
        },
        
    ]
}
export default products