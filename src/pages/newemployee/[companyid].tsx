import { EmployeesContainer } from "../../styles/employeeStyles";
import Header from "../../components/Header";
import Head from 'next/head';
import FormCardEmployee from "../../components/FormCardEmployee";
import { useRouter } from "next/router";

export default function NewEmployeePage () {
    
    return (
        <EmployeesContainer>
            <Head>
                <title>Employee | PontoGO</title>
                <meta name="description" content="Controle de ponto eletrônico e online para sua empresa. Jornadas 12x36, banco de horas, cálculos de horas extras e adicional noturno, folha de ponto, ponto com foto e localização. Aplicativos de ponto para ponto para tablets, celulares e computadores." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" />
                <meta  name='viewport'  content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
        <main>
            <FormCardEmployee />
        </main>
        </EmployeesContainer>
    )
}