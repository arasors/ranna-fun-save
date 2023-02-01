import React, {memo} from "react";
import Image from "next/image";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {header} from "0.lib/data/header";
import {useSelector} from "react-redux";

const Header = () => {

    const {t} = useTranslation();
    const user = useSelector(state => state?.user);

    return(
        <nav id="header" className={classNames({
            "py-2 h-20 w-full relative": true,
            "flex-row flex justify-between": true,
            "sticky top-0 bg-white z-10": true
        })}>
           <div className={classNames({
               "container mx-auto relative": true,
               "flex-row flex justify-center md:justify-between": true,
           })}>
               <div id="logo" className={"md:inline-flex hidden"}>
                   <Link href={"/"}>
                       <Image src={require("/public/logo.svg")?.default} alt={"Logo"} />
                   </Link>
               </div>

               <div
                   id="desktop"
                    className="menu z-10 flex-row items-center translate-y-2 md:inline-flex hidden">
                   {!user?.isLogin ? (
                       <React.Fragment>
                           {header?.menu?.map((item, key) => (
                               <Link href={item?.href} className={classNames({
                                   "cursor-pointer transition-all ease-in-out": true,
                               })} key={key}>
                                   <div className={classNames({
                                       "bg-primary py-1 relative text-white items-center": true,
                                       "cursor-pointer": true,
                                       "rounded-full -translate-x-3": item?.href==="/profile",
                                       "rounded-l-xl": item?.href!=="/profile" && key===0,
                                       "pr-4": item?.href!=="/profile" && ((header?.menu?.length-2)===key)
                                   })}>
                                       {item?.ico && <div
                                           className={classNames({
                                               "p-1 h-8 w-12": item?.href!=="/profile",
                                               "px-1.5 scale-105 py-1 items-center justify-center  text-2xl": item?.href==="/profile",
                                               "bg-primary rounded-full cursor-pointer items-center": true,
                                               "shadow shadow-md shadow-slate-600": header?.menu?.length-1 === key
                                           })}>
                                           {item?.href!=="/profile" ? (
                                               <>{item?.ico}</>
                                           ) : <div className={classNames({
                                               "circle-dashed-border px-2 py-1.5 cursor-pointer": true
                                           })}>
                                               {item?.ico}
                                           </div>}
                                       </div>}
                                       {item?.title && <span className={"pointer-events-none"}>{t(item?.title)}</span>}
                                   </div>
                               </Link>
                           ))}
                       </React.Fragment>
                   ) : (
                       <React.Fragment>
                           {header?.login?.map((item, key) => (
                               <Link href={item?.href} className={classNames({
                                   "cursor-pointer transition-all ease-in-out hover:opacity-70": true,
                                   "ml-8": key!==0 && (item?.title==="login" || item?.title==="register")
                               })} key={key}>
                                   <div className={classNames({
                                       "bg-primary px-8 py-1 rounded relative text-white items-center": true,
                                       "cursor-pointer": true
                                   })}>
                                       {item?.ico && <div
                                           className={classNames({
                                               "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2": true,
                                               "bg-primary p-1 rounded-full cursor-pointer": true,
                                               "shadow shadow-md shadow-slate-600": true
                                           })}>
                                           <div className={classNames({
                                               "circle-dashed-border p-1 cursor-pointer": true
                                           })}>
                                               {item?.ico}
                                           </div>
                                       </div>}
                                       {item?.title && <span className={"pointer-events-none"}>{t(item?.title)}</span>}
                                   </div>
                               </Link>
                           ))}
                       </React.Fragment>
                   )}
               </div>


               <div
                    id="mobile"
                   className="navbar md:hidden w-full">
                   <div className="container nav-container">
                       <input className="checkbox" type="checkbox" name="" id=""/>
                       <div className="hamburger-lines">
                           <span className="line line1"></span>
                           <span className="line line2"></span>
                           <span className="line line3"></span>
                       </div>
                       <div id="logo" className={"logo flex-1 pr-12 items-center justify-center"}>
                           <Link href={"/"}>
                               <Image src={require("/public/logo.svg")?.default} alt={"Logo"} />
                           </Link>
                       </div>
                       <div className="menu-items">
                           <li><a href="#">Home</a></li>
                           <li><a href="#">about</a></li>
                           <li><a href="#">blogs</a></li>
                           <li><a href="#">portfolio</a></li>
                           <li><a href="#">contact</a></li>
                       </div>
                   </div>
               </div>

           </div>
            <div
                id="bg-circ"
                className={classNames({
                    "absolute right-0 top-full -translate-y-12  box-border w-1/3 h-16": true,
                    "rounded-[50%] bg-white pointer-events-none select-none": true,
                    "md:inline-flex hidden": true
                })}
            />
        </nav>
    )
}

export default memo(Header);
