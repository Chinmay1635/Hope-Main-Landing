import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ bgColor = "bg-[#FFD700]", text }) {
  return (
    <div 
      className={`${bgColor || "bg-[#FFD700]"} section w-fit sm:w-fit px-4 
      py-[1.6vh] border-[1px] border-black rounded-md
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200/50`}
    >
      <div 
        className={`${styles.masker} flex items-center gap-2 overflow-hidden 
        relative cursor-pointer`}
      >
        <span 
          className={`${styles.spanMask} font-[Sansita] text-[1.8vh] 
          capitalize tracking-normal font-semibold text-black`}
        >
          {text}
        </span>
        <LuArrowUpRight 
          style={{
            fontSize: "24px", 
            color: "black", 
          }} 
          className={`${styles.iconMask} transition-transform duration-300 group-hover:rotate-45`} 
        /> 
      </div>         
    </div>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  bgColor: "bg-[#FFD700]"
};

export default Button