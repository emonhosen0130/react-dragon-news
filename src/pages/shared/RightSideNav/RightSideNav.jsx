import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <GrGithub></GrGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4  mb-6 ">
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className="p-4 flex text-lg items-center rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center rounded-x" href="">
                    <FaTwitter className="mr-2"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center rounded-b-lg" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* {Q-zone} */}
            <div className="p-4 space-y-3 mb-6 ">
                <h2 className="text-3xl">Q-Zone</h2>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;