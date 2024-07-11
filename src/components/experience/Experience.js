import React from 'react';
import Style from './Experience.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function Experience() {

    function experienceMeText5() {
        return <>
            <p><span style={{ color: info.baseColor }}>{info.experiences.map((item) => item.empresa5)}<span
                className={Style.green}>({info.experiences.map((item) => item.cargo5)})</span> $ </span>
                {info.experiences.map((item) => item.funcao5)}<br></br><br></br>
                {info.experiences.map((item) => item.tecnologias5)}<br></br><br></br>
                {info.experiences.map((item) => item.periodo5)}
            </p>
        </>;
    }
    function experienceMeText4() {
        return <>
            <p><span style={{ color: info.baseColor }}>{info.experiences.map((item) => item.empresa4)}<span
                className={Style.green}>({info.experiences.map((item) => item.cargo4)})</span> $ </span>
                {info.experiences.map((item) => item.funcao4)}<br></br><br></br>
                {info.experiences.map((item) => item.tecnologias4)}<br></br><br></br>
                {info.experiences.map((item) => item.periodo4)}
            </p>
        </>;
    }
    function experienceMeText3() {
        return <>
            <p><span style={{ color: info.baseColor }}>{info.experiences.map((item) => item.empresa3)}<span
                className={Style.green}>({info.experiences.map((item) => item.cargo3)})</span> $ </span>
                {info.experiences.map((item) => item.funcao3)}<br></br><br></br>
                {info.experiences.map((item) => item.tecnologias3)}<br></br><br></br>
                {info.experiences.map((item) => item.periodo3)}
            </p>
        </>;
    }
    function experienceMeText2() {
        return <>
            <p><span style={{ color: info.baseColor }}>{info.experiences.map((item) => item.empresa2)}<span
                className={Style.green}>({info.experiences.map((item) => item.cargo2)})</span> $ </span>
                {info.experiences.map((item) => item.funcao2)}<br></br><br></br>
                {info.experiences.map((item) => item.periodo2)}
            </p>
        </>;
    }
    function experienceMeText1() {
        return <>
            <p><span style={{ color: info.baseColor }}>{info.experiences.map((item) => item.empresa1)}<span
                className={Style.green}>({info.experiences.map((item) => item.cargo1)})</span> $ </span>
                {info.experiences.map((item) => item.funcao1)}<br></br><br></br>
                {info.experiences.map((item) => item.periodo1)}
            </p>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={experienceMeText5()} />
            <Terminal text={experienceMeText4()} />
            <Terminal text={experienceMeText3()} />
            <Terminal text={experienceMeText2()} />
            <Terminal text={experienceMeText1()} />
        </Box>
    )
}