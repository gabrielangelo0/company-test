import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/FormCardCompany/styles";
import api from "../../../services/axios";
import { AddPointContainer, AddPointForm } from "../../../styles/addPointsStyles";


export default function AddPointsPage () {
    const { query, push } = useRouter();
    const { reset, handleSubmit } = useForm();
    const [info, setInfo] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            api.get('get-employees', {
                params: {
                    'company-token-pg': query.companyid,
                    'employee-token-pg': query.employeeid
                }
            })
            .then(({ data }) => {
                setInfo(data);
            }), 150000
        })
}, []);

    function onSubmitForm (event: FormEvent | any) {

        api.post('add-point', {
            date: "2022-10-26T18:00:00.000Z",
            latitude: null,
            longitude: null,
            userData: {
                device: "iPhone 13",
                gatewayMac: null,
                ip: "192.168.15.13",
                operatingSystem: "iOS"
            }
        }, {
        params: {
            'company-token-pg': query.companyid,
            'employee-token-pg': query.employeeid
        }
        })
        .then(({ data }) => {
            push(`/points/${query.companyid}/${query.employeeid}`)
        })
        toast.success('Point successfully added');

        reset();
    }

    return (
        <AddPointContainer>
            <AddPointForm onSubmit={handleSubmit(onSubmitForm)}>
                
                <div>
                    <h2>Company Info:</h2>
                    {info ? <p>name: <span>{info[0]?.name}</span></p> : null}
                    <p>Company ID: <span>{query.companyid}</span></p>
                </div>
                <div>
                    <h2>Employee Info:</h2>
                    {info ? <p>name: <span>{info[1]?.name}</span></p> : null}
                    <p>Employee ID: <span>{query.employeeid}</span></p>
                </div>

                <Button variant="green">Add Point</Button>
            </AddPointForm>
        </AddPointContainer>
    )
}