import React, {memo} from "react";
import Image from "next/image";
import {useTranslation} from "react-i18next";

const CreditCard = ({item}) => {

    const {t} = useTranslation();

    return(
        <div className={`card ${item?.type}`}>
            <div className="card__info">
                <div className="card__logo">
                    <Image src={require("/public/logo-white.svg")} alt={t("title")} className={"w-32"} />
                    <div className={"flex-row gap-x-1 items-center pr-3"}>
                        <div className="h-10 w-0.5 rounded mx-2 bg-white"></div>
                        <span>{t(`${item?.type}-expired-time-text`)}</span>
                    </div>
                </div>
                {/*<div className="card__chip">*/}
                {/*    <svg className="card__chip-Lines" role="Img" width="40px" height="40px" viewBox="0 0 200 200" aria-label="chip">*/}
                {/*        <g opacity="1">*/}
                {/*            <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*            <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2" />*/}
                {/*        </g>*/}
                {/*    </svg>*/}
                {/*    <div className="card__chip-Texture"></div>*/}
                {/*</div>*/}
                <div className="card__name" aria-label={`${item?.title}`}>{t(`${item?.title}`)}</div>

                <div className="card__number">
                    <span className="card__digit-group">0000</span>
                    <span className="card__digit-group">0021</span>
                    <span className="card__digit-group">4748</span>
                    <span className="card__digit-group">3647</span>
                </div>
                {/*<div className="card__vendor" role="Img" aria-labelledby="card-Vendor">*/}
                {/*    <span id="card-Vendor" className="card__vendor-Sr">Mastercard</span>*/}
                {/*</div>*/}
            </div>
            <div className="card__type">
                <div className="circle_card__type">
                    {/*<Image src={require("/public/icons/dinner.svg")?.default} alt={"Dinner"} />*/}
                    {/*<Image src={require("/public/icons/photo.svg")?.default} alt={"Photo"} />*/}
                    {/*<Image src={require("/public/icons/basket.svg")?.default} alt={"Basket"} />*/}
                    {/*<Image src={require("/public/icons/health.svg")?.default} alt={"Health"} />*/}

                    <div className="text-wrapper">
                        <span>A</span>
                        <span>B</span>
                        {(item?.type==="gold" || item?.type==="diamond") && (
                            <span>C</span>
                        )}
                        {item?.type==="diamond" && (
                            <span>D</span>
                        )}
                    </div>


                </div>
            </div>
            <div className="card__texture"></div>
            <div className="card__texture2" hue={223}></div>
        </div>
    )
};

export default memo(CreditCard);
