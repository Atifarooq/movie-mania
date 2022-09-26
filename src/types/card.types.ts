import { BaseProps } from "./base";

type CardProp = {
    title: string;
    description: string; 
    src?: string;
}; 

export type CardProps = CardProp & BaseProps;
