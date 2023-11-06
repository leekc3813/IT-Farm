import { RadioChangeEvent } from "antd";

export interface ICenterPageUIProps {
    placement : string;
    placementChange : (e: RadioChangeEvent) => void;
}