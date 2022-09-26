import { BaseProps } from "./base";

type FilterProp = {
    onChange: Function;
    loading: boolean;
}; 

export type FilterProps = FilterProp & BaseProps;
