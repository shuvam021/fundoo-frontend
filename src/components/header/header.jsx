import React from "react";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-first icon-colors">
                    <MenuOutlinedIcon />

                    <img className="logo gb_wc gb_3d" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                        srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
                        alt="" aria-hidden="true" />
                    <span>Keep</span>
                </div>

                <div className="nav-second">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="nav-third icon-colors">
                    <RefreshOutlinedIcon />
                    <DnsOutlinedIcon />
                    <SettingsOutlinedIcon />

                </div>
                <div className="nav-fourth">
                    <div className="icon-colors">
                        <AppsOutlinedIcon />
                    </div>
                    <div><a href="#"><span className="profile">S</span></a></div>
                </div>
            </nav>
        </div>
    )
}


export default Header