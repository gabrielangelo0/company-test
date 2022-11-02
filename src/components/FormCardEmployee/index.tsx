import { RegularText, TitleText } from "../Typograph";
import { Button, ButtonContainer, CardContainer, CardInput, ContentForm, FormCardContainer, FullInput, HalfInput } from "./styles";
import { UserSquare, Cake, IdentificationCard, Envelope } from 'phosphor-react';
import { FormEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import api from "../../services/axios";
import { toast } from "react-toastify";
import { normalizeCPFNumber } from "../../utils/masks";

export default function FormCardEmployee () {
    const { query, push } = useRouter();
    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm();

    function onSubmitForm (event: FormEvent | any) {

        api.post('register-employees', {
            disableMandril: true,
            employees: [{
                ...event, 
                admissionDate: new Date().toISOString(),
                companyAdmissionDate: new Date().toISOString(),
                clt: true,
                registration: '000002'
            }]
        }, {
        params: {
            'company-token-pg': query.companyid
        }
        })
        .then(({ data }) => {
            const newEmployee = data.employees[0];
            push(`/addpoints/${query.companyid}/${newEmployee.id}`)
        })
        toast.success('Employee created successfully');

        reset();
    }

    function handleReset () {
        reset();
    }

    const cpfValue = watch('cpf');
    useEffect(() => {
        setValue('cpf', normalizeCPFNumber(cpfValue))
    }, [cpfValue]);

    return (
        <FormCardContainer>
            <TitleText>Create new employee<span>.</span></TitleText>
            <ContentForm onSubmit={handleSubmit(onSubmitForm)}>
                <HalfInput>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>First Name</RegularText>
                                <input type="text" {...register('firstName', { required: true })} />
                            </div>
                                <UserSquare size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.firstName && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Last Name</RegularText>
                                <input type="text" {...register('lastName', { required: true })} />
                            </div>
                                <UserSquare size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.lastName && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Birthday</RegularText>
                                <input type="date" {...register('birthdate', { required: true, valueAsDate: true } )} />
                            </div>
                                <Cake size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.birthdate && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>CPF</RegularText>
                                <input type="text" maxLength={11} {...register('cpf', { required: true })} />
                            </div>
                                <IdentificationCard size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.cpf && <span>This field is required</span>}
                    </CardContainer>
                </HalfInput>
                <FullInput>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Email</RegularText>
                                <input type="email" {...register('email', { required: true })} />
                            </div>
                                <Envelope size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.email && <span>This field is required</span>}
                    </CardContainer>
                </FullInput>
            <ButtonContainer>
                <Button variant="gray" type="button" onClick={ handleReset }>Reset</Button>
                <Button variant="blue" type="submit">Create account</Button>
            </ButtonContainer>
            </ContentForm>
        </FormCardContainer>
    )
}