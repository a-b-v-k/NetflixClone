import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredtitle">Revenue</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,000</span>
                    <span className="featuredmoneyrate">         
                        -11.0 <ArrowDownward className="featurednum neg" style={{fontSize: 17}}/>
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Sales</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,103</span>
                    <span className="featuredmoneyrate">           
                        -9.0 <ArrowDownward className="featurednum neg" style={{fontSize: 17}}/>
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Cost</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,250</span>
                    <span className="featuredmoneyrate">       
                        +10.0 <ArrowUpward className="featurednum" style={{fontSize: 17}}/>
                    </span>
                </div>
                <span className="featuredsub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
