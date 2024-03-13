import Image from "next/image"
import Twitter from '../../../../public/socialmedia_icons/twitterx.svg'
import Facebook from '../../../../public/socialmedia_icons/facebook.svg'
import Instagram from '../../../../public/socialmedia_icons/instagram.svg'
import Youtube from '../../../../public/socialmedia_icons/youtube.svg'
 interface SocialMediaContainerProps {
    className: string
 }
const SocialMediaContainer = ({className}: SocialMediaContainerProps) => {
  return (
    <div
        className={className}
    >
        <Image src={Twitter} alt="Twitter" className="w-8 h-8  mx-2 cursor-pointer hover:scale-110" />
        <Image src={Facebook} alt="Facebook" className="w-8 h-8 mx-2 cursor-pointer hover:scale-110" />
        <Image src={Instagram} alt="Instagram" className="w-8 h-8 mx-2 cursor-pointer hover:scale-110" />
        <Image src={Youtube} alt="Youtube" className="w-8 h-8 mx-2 cursor-pointer hover:scale-110" />
    </div>
  )
}
export default SocialMediaContainer