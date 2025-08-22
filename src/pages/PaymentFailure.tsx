import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';


const PaymentFailure = () => {
  return (
    <div
            className=' pt-[120px] h-[80vh] flex items-center justify-center'
        >
            <div className=' w-[90%] md:w-[50%] h-[60%] bg-transparent border border-black rounded-lg flex flex-col items-center justify-center'>
                <FeedbackIcon
                    className=' text-red-500 font-bold text-7xl mb-4'
                />
                <h1 className=' font-semibold italic mb-4'>Your payment failed 🤧</h1>
                <Link
                    to={'/shop'}
                    className=' underline font-thin italic'
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
  )
}

export default PaymentFailure