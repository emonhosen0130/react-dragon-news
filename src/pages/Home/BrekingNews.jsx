import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary"></button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text.
                </Link>
            </Marquee>
        </div>

    );
};

export default BrekingNews;