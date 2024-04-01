import { star } from "../assets/icons";
const Rating = ({rate}) => {
    return ( <div className="mt-8 flex items-center gap-3">
        <img src={star} alt="star" className="w-[22px] h-[22px]" />
        <span className="text-slate-gray font-montserrat text-xl leading-relaxed">({rate})</span>
    </div> );
}
 
export default Rating;