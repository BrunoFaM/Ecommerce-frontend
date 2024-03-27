import banner from "../images/bannerImg.jpg"
import logo from "../images/logo.jpg"

function Banner() {
  return (
    <div className="text-white">
        
        <div className="h-[160px] w-full bg-cover">
            <img  className="" src={banner} alt="a banner" />
        </div>
        
        <div className="w-fit ml-3">
            <img className=""  src={logo} alt="a logo" width="100" height="100" />
            <h2 className=" mt-1 font-semibold font-mono">Twentytheef</h2>
        </div>

    </div>
  )
}

export default Banner