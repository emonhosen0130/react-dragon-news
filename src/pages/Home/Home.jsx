import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BrekingNews from "./BrekingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News Coming Soon...</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;