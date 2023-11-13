import PurchaseListPageUI from "./purchaseList.presenter";
import { useRouter } from "next/router";

export default function PurchaseListPage():JSX.Element {
    const router = useRouter()

    return (
        <PurchaseListPageUI />
    )
}