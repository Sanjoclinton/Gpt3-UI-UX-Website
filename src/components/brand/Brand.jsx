import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import LazyLoad from "react-lazyload";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <LazyLoad><img src={google} alt="google" /></LazyLoad>
      </div>
      <div>
        <LazyLoad><img src={slack} alt="slack" /></LazyLoad>
      </div>
      <div>
        <LazyLoad><img src={atlassian} alt="atlassian" /></LazyLoad>
      </div>
      <div>
        <LazyLoad><img src={dropbox} alt="dropbox" /></LazyLoad>
      </div>
      <div>
        <LazyLoad><img src={shopify} alt="shopify" /></LazyLoad>
      </div>
    </div>
  );
};

export default Brand;
