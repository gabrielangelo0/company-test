import { HeaderContainer, ItemList, ListHeader } from "./styles";
import LogoImg from '../../assets/logotipo.svg';
import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <HeaderContainer>
            <ListHeader>
                <ItemList><Image src={LogoImg} alt={"Logomarca da PontoGO"} /></ItemList>
                <ItemList><Link href='/'>Home</Link></ItemList>
            </ListHeader>
        </HeaderContainer>
    )
}