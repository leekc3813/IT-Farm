import PurchaseOrderPageUI from "./order.presenter";
import { useRouter } from "next/router";

export default function PurchaseOrderPage():JSX.Element{
    const router = useRouter()

    const product = decodeURIComponent(router.asPath.replace('/order','').slice(15))

    return(
        <PurchaseOrderPageUI />
    )
}