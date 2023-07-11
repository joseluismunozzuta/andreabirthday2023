import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import React from 'react'

const TextAccordion = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className="px-4 text-center bg-blue-gray-100 bg-opacity-80">
            <Fragment>
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Un 11 de julio de 1999...
                    </AccordionHeader>
                    <AccordionBody style={{ color: "black" }}>
                        Te parieron jeje y vino a este mundo una chica increíble que es capaz de alegrarme la vida con una sola de sus ocurrencias!<br></br><br></br>
                        Nació una engreída, malhumorada, risueña, corazón de pollito, amorosa, fastidiosa, hermosa, graciosa y extremadamente especial y única Andrea ❤️ <br></br> <br></br>
                        Soy bien feli celebrando tu vida sabes?
                        No es un día cualquiera, hace 24 años llegaste aquí puem, qué aburrido sería todo sin ti de verdá!😐
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Un 11 de julio de 2023...
                    </AccordionHeader>
                    <AccordionBody style={{ color: "black" }}>
                        Tengo la suerte de ya ser tu flaquito puem y es el primer cumple cumple juntos como enamorades 🤓 <br></br><br></br>
                        Gracias por ser quien me acompaña en las buenas, en las malas y en las peores! Quien celebra mis logros, reniega por mis fallos y me da ese cálido
                        abracito cuando lo necesito 🤍 Eres lo mejor de mi vida, la mejor parte de todos los días! <br></br><br></br>
                        Por eso y mucho más, valoro infinito este día porque eres invaluable, reinita cabezona 🤍
                        Así que como este y algunos más, espero que sean detalles que te saquen esa hermosa sonrisa que tienes 😙
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        Y ojalá todos los 11 de julio...
                    </AccordionHeader>
                    <AccordionBody style={{ color: "black" }}>
                        Pueda seguir a tu lado compartiendo momentos únicos, siendo feli🥹 <br></br><br></br> 
                        De aquí a 1, a 5, o a 20 años (o más si es que las IA's no nos matan), 
                        espero que lo único que sea distinto sea que habrá más fotos nuestras en el carousel de arriba, mi amor 🤍
                        <br></br><br></br>
                        Eres y serás siempre mi Andreo bonito, quien me está enseñando qué es amar y ser amado! 
                        Gracias por existir y haberte cruzado en mi vida, feliz cumpleaños, rollito vegano ❤️
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
}

export default TextAccordion;