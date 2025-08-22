import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StickyButton = () => {
    return (
        <Link
            target="blank"
            to={"https://wa.me/447310107057"}
            className={`fixed bottom-4 right-4 
        bg-green-600 text-white font-medium p-5 
        rounded-full shadow-lg hover:bg-green-700 
        transition-all duration-300 focus:outline-none`}
        >
            <WhatsAppIcon />
        </Link>
    );
};

export default StickyButton;
